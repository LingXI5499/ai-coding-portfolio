package com.lingxi.evolution.config;

import com.lingxi.evolution.exception.ApiException;
import com.lingxi.evolution.service.AccountService;

import jakarta.servlet.http.*;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.Set;

/** 手写过渡版本：服务端同步令牌 + 会话用户版本检查。 */
@Component
public class SessionGuard implements HandlerInterceptor {
    private static final Set<String> PUBLIC =
            Set.of("/api/auth/csrf", "/api/auth/register", "/api/auth/login");
    private static final Set<String> SAFE = Set.of("GET", "HEAD", "OPTIONS");
    private final AccountService accounts;

    public SessionGuard(AccountService accounts) {
        this.accounts = accounts;
    }

    public static String token(HttpSession session) {
        synchronized (session) {
            var token = (String) session.getAttribute("CSRF");
            if (token == null) {
                byte[] bytes = new byte[32];
                new SecureRandom().nextBytes(bytes);
                token = Base64.getUrlEncoder().withoutPadding().encodeToString(bytes);
                session.setAttribute("CSRF", token);
            }
            return token;
        }
    }

    @Override
    public boolean preHandle(HttpServletRequest req, HttpServletResponse res, Object handler) {
        var session = req.getSession(false);
        if (!SAFE.contains(req.getMethod())) {
            String expected = session == null ? null : (String) session.getAttribute("CSRF");
            String actual = req.getHeader("X-CSRF-TOKEN");
            if (expected == null
                    || actual == null
                    || !MessageDigest.isEqual(
                            expected.getBytes(StandardCharsets.UTF_8),
                            actual.getBytes(StandardCharsets.UTF_8))) {
                throw new ApiException(403, "CSRF_INVALID", "CSRF 校验失败，请刷新页面");
            }
        }
        if (!PUBLIC.contains(req.getRequestURI())) {
            if (session == null || !(session.getAttribute("USER_ID") instanceof Long id)) {
                throw new ApiException(401, "UNAUTHENTICATED", "请先登录");
            }
            var user = accounts.active(id);
            if (!user.getAuthVersion().equals(session.getAttribute("AUTH_VERSION"))) {
                session.invalidate();
                throw new ApiException(401, "UNAUTHENTICATED", "会话已失效");
            }
            req.setAttribute("ACCOUNT_ID", id);
        }
        res.setHeader("Cache-Control", "no-store");
        return true;
    }
}
