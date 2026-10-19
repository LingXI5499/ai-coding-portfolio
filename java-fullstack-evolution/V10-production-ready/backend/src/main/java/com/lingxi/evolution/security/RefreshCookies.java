package com.lingxi.evolution.security;

import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;

@Component
public class RefreshCookies {
    private final boolean secure;

    public RefreshCookies(@Value("${COOKIE_SECURE:false}") boolean secure) {
        this.secure = secure;
    }

    public void write(HttpServletResponse response, String token) {
        response.addHeader(
                HttpHeaders.SET_COOKIE,
                ResponseCookie.from("REFRESH", token)
                        .httpOnly(true)
                        .secure(secure)
                        .sameSite("Strict")
                        .path("/api/auth")
                        .maxAge(token.isEmpty() ? 0 : 604800)
                        .build()
                        .toString());
    }
}
