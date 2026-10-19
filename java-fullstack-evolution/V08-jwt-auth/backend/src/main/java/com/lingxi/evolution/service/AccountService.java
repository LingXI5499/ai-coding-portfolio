package com.lingxi.evolution.service;

import com.lingxi.evolution.dto.RegisterRequest;
import com.lingxi.evolution.entity.Account;
import com.lingxi.evolution.exception.ApiException;
import com.lingxi.evolution.mapper.AccountMapper;
import com.lingxi.evolution.pagination.PageResult;
import com.lingxi.evolution.query.UserQuery;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.charset.StandardCharsets;
import java.util.List;

/** 账户业务；不接触 Servlet 会话或页面。 */
@Service
public class AccountService {
    private final AccountMapper mapper;
    private final PasswordEncoder passwords;
    private final String dummyHash;
    private final LoginThrottle throttle;

    public AccountService(AccountMapper mapper, PasswordEncoder passwords, LoginThrottle throttle) {
        this.mapper = mapper;
        this.passwords = passwords;
        this.dummyHash = passwords.encode("dummy-password-for-timing-only");
        this.throttle = throttle;
    }

    public static void validatePassword(String password) {
        if (password == null
                || password.length() < 12
                || password.length() > 64
                || password.getBytes(StandardCharsets.UTF_8).length > 72) {
            throw new ApiException(400, "INVALID_PASSWORD", "密码须为 12–64 字符，UTF-8 编码不超过 72 字节");
        }
    }

    @Transactional
    public Account register(RegisterRequest request) {
        validatePassword(request.password());
        var user = new Account();
        user.setUsername(request.username());
        user.setPasswordHash(passwords.encode(request.password()));
        user.setNickname(request.nickname());
        user.setEmail(
                request.email() == null || request.email().isBlank() ? null : request.email());
        mapper.insert(user);
        return mapper.findById(user.getId());
    }

    public Account verify(String username, String password) {
        throttle.check("login:" + username);
        var user = mapper.findByUsername(username);
        boolean matched =
                password != null
                        && password.getBytes(StandardCharsets.UTF_8).length <= 72
                        && passwords.matches(
                                password, user == null ? dummyHash : user.getPasswordHash());
        if (!matched || user == null || !"ACTIVE".equals(user.getStatus())) {
            throttle.failure("login:" + username);
            throw new ApiException(401, "AUTH_FAILED", "用户名或密码错误，或账户不可用");
        }
        throttle.clear("login:" + username);
        return user;
    }

    public Account active(long id) {
        var user = mapper.findById(id);
        if (user == null || !"ACTIVE".equals(user.getStatus())) {
            throw new ApiException(401, "UNAUTHENTICATED", "请重新登录");
        }
        return user;
    }

    public Account byUsername(String username) {
        return mapper.findByUsername(username);
    }

    @Transactional
    public void changePassword(long id, String current, String next) {
        var user = active(id);
        if (!passwords.matches(current, user.getPasswordHash())) {
            throw new ApiException(400, "PASSWORD_MISMATCH", "当前密码不正确");
        }
        validatePassword(next);
        mapper.password(id, passwords.encode(next));
    }

    @Transactional
    public void resetPassword(long id, String next) {
        validatePassword(next);
        active(id);
        mapper.password(id, passwords.encode(next));
    }

    @Transactional
    public Account profile(long id, String nickname, String email) {
        active(id);
        mapper.profile(id, nickname, email == null || email.isBlank() ? null : email);
        return active(id);
    }

    @Transactional
    public void status(long id, String status) {
        if (mapper.findById(id) == null) {
            throw new ApiException(404, "USER_NOT_FOUND", "用户不存在");
        }
        mapper.status(id, status);
    }

    @Transactional
    public void invalidate(long id) {
        active(id);
        mapper.invalidate(id);
    }

    @Transactional(readOnly = true)
    public PageResult<Account> list(UserQuery query) {
        long total = mapper.count(query);
        return PageResult.of(total == 0 ? List.of() : mapper.search(query), total, query);
    }
}
