package com.lingxi.evolution.service;

import com.lingxi.evolution.exception.ApiException;
import com.lingxi.evolution.mapper.LifecycleMapper;
import com.lingxi.evolution.security.TokenSecrets;

import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.*;

@Service
public class PasswordResetService {
    private final AccountService accounts;
    private final TokenService tokens;
    private final LifecycleMapper mapper;
    private final MailGateway mail;
    private final LoginThrottle throttle;
    private final AuditService audit;
    private final Clock clock;

    public PasswordResetService(
            AccountService accounts,
            TokenService tokens,
            LifecycleMapper mapper,
            MailGateway mail,
            LoginThrottle throttle,
            AuditService audit,
            Clock clock) {
        this.accounts = accounts;
        this.tokens = tokens;
        this.mapper = mapper;
        this.mail = mail;
        this.throttle = throttle;
        this.audit = audit;
        this.clock = clock;
    }

    @Transactional
    public void request(String username, String ip) {
        throttle.check("reset-request-ip:" + ip);
        throttle.failure("reset-request-ip:" + ip);
        throttle.check("reset-request-user:" + username);
        throttle.failure("reset-request-user:" + username);
        var user = accounts.byUsername(username);
        if (user == null || user.getEmail() == null || !"ACTIVE".equals(user.getStatus())) {
            return;
        }
        mapper.invalidateResets(user.getId());
        String raw = TokenSecrets.random();
        mapper.reset(
                TokenSecrets.hash(raw),
                user.getId(),
                LocalDateTime.ofInstant(clock.instant().plusSeconds(900), ZoneOffset.UTC));
        try {
            mail.sendReset(user.getEmail(), raw);
            audit.record(user.getId(), "RESET_REQUESTED");
        } catch (RuntimeException e) {
            mapper.invalidateResets(user.getId());
            audit.record(user.getId(), "RESET_DELIVERY_FAILED");
            LoggerFactory.getLogger(PasswordResetService.class)
                    .warn("Reset delivery failed; consult mail service health");
        }
    }

    @Transactional
    public void reset(String raw, String password, String ip) {
        throttle.check("reset-use-ip:" + ip);
        throttle.failure("reset-use-ip:" + ip);
        AccountService.validatePassword(password);
        String hash = TokenSecrets.hash(raw);
        Long id = mapper.resetUser(hash);
        if (id == null
                || mapper.consumeReset(
                                hash, LocalDateTime.ofInstant(clock.instant(), ZoneOffset.UTC))
                        != 1) {
            throw new ApiException(400, "RESET_INVALID", "重置凭据无效或已过期");
        }
        accounts.resetPassword(id, password);
        tokens.revokeAll(id);
        mapper.invalidateResets(id);
        audit.record(id, "PASSWORD_RESET");
    }
}
