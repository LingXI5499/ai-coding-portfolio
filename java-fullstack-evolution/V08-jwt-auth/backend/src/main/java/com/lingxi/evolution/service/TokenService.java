package com.lingxi.evolution.service;

import com.lingxi.evolution.config.JwtConfig;
import com.lingxi.evolution.entity.*;
import com.lingxi.evolution.exception.ApiException;
import com.lingxi.evolution.mapper.TokenMapper;
import com.lingxi.evolution.security.TokenSecrets;
import com.lingxi.evolution.vo.UserVO;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.*;
import java.util.*;

@Service
public class TokenService {
    public record Access(String accessToken, long expiresIn, UserVO user) {}

    public record Issued(Access access, String refresh) {}

    private final TokenMapper tokens;
    private final AccountService accounts;
    private final JwtEncoder encoder;
    private final Clock clock;
    private final long accessSeconds;

    public TokenService(
            TokenMapper tokens,
            AccountService accounts,
            JwtEncoder encoder,
            Clock clock,
            @Value("${security.access-seconds:300}") long accessSeconds) {
        this.tokens = tokens;
        this.accounts = accounts;
        this.encoder = encoder;
        this.clock = clock;
        this.accessSeconds = accessSeconds;
    }

    @Transactional
    public Issued login(String username, String password) {
        return issue(accounts.verify(username, password), UUID.randomUUID().toString());
    }

    private Issued issue(Account user, String family) {
        accounts.active(user.getId());
        String raw = TokenSecrets.random();
        var row = new RefreshToken();
        row.setTokenHash(TokenSecrets.hash(raw));
        row.setUserId(user.getId());
        row.setFamilyId(family);
        row.setExpiresAt(
                LocalDateTime.ofInstant(clock.instant().plusSeconds(604800), ZoneOffset.UTC));
        tokens.insert(row);
        var claims =
                JwtClaimsSet.builder()
                        .issuer(JwtConfig.ISSUER)
                        .subject(user.getId().toString())
                        .audience(List.of("evolution-api"))
                        .issuedAt(clock.instant())
                        .expiresAt(clock.instant().plusSeconds(accessSeconds))
                        .claim("ver", user.getAuthVersion())
                        .claim("role", user.getRole())
                        .build();
        String access =
                encoder.encode(
                                JwtEncoderParameters.from(
                                        JwsHeader.with(MacAlgorithm.HS256).build(), claims))
                        .getTokenValue();
        return new Issued(new Access(access, accessSeconds, UserVO.from(user)), raw);
    }

    // 重放时撤销整个家族；业务 401 不能回滚已经发生的撤销。
    @Transactional(noRollbackFor = ApiException.class)
    public Issued refresh(String raw) {
        if (raw == null || raw.length() > 128) {
            throw invalid();
        }
        String hash = TokenSecrets.hash(raw);
        var row = tokens.find(hash);
        if (row == null) {
            throw invalid();
        }
        if (tokens.consume(hash, LocalDateTime.ofInstant(clock.instant(), ZoneOffset.UTC)) != 1) {
            tokens.revokeFamily(row.getFamilyId());
            throw invalid();
        }
        return issue(accounts.active(row.getUserId()), row.getFamilyId());
    }

    @Transactional
    public void logout(String raw) {
        if (raw != null && raw.length() <= 128) {
            tokens.revoke(TokenSecrets.hash(raw));
        }
    }

    @Transactional
    public void revokeAll(long id) {
        tokens.revokeAll(id);
    }

    private ApiException invalid() {
        return new ApiException(401, "REFRESH_INVALID", "刷新凭据已失效，请重新登录");
    }
}
