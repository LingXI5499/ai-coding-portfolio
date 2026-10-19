package com.lingxi.evolution.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lingxi.evolution.exception.ApiException;
import com.lingxi.evolution.service.AccountService;

import jakarta.servlet.*;
import jakarta.servlet.http.*;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class AccountStateFilter extends OncePerRequestFilter {
    private final AccountService accounts;
    private final ObjectMapper json;

    public AccountStateFilter(AccountService accounts, ObjectMapper json) {
        this.accounts = accounts;
        this.json = json;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest req, HttpServletResponse res, FilterChain chain)
            throws ServletException, IOException {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null
                && authentication.isAuthenticated()
                && !"anonymousUser".equals(authentication.getPrincipal())) {
            Long id = null;
            Integer version = null;
            if (authentication.getPrincipal()
                    instanceof org.springframework.security.oauth2.jwt.Jwt jwt) {
                id = Long.parseLong(jwt.getSubject());
                version = ((Number) jwt.getClaim("ver")).intValue();
            }

            try {
                if (id != null && !accounts.active(id).getAuthVersion().equals(version)) {
                    throw new ApiException(401, "UNAUTHENTICATED", "身份已失效");
                }
            } catch (ApiException | NumberFormatException e) {
                SecurityContextHolder.clearContext();
                var session = req.getSession(false);
                if (session != null) {
                    session.invalidate();
                }
                SecurityJson.error(res, json, 401, "UNAUTHENTICATED");
                return;
            }
        }
        chain.doFilter(req, res);
    }
}
