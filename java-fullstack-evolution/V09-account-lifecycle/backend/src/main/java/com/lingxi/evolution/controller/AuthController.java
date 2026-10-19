package com.lingxi.evolution.controller;

import com.lingxi.evolution.dto.*;
import com.lingxi.evolution.security.RefreshCookies;
import com.lingxi.evolution.service.*;
import com.lingxi.evolution.vo.*;

import jakarta.servlet.http.*;
import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AccountService accounts;
    private final TokenService tokens;
    private final RefreshCookies cookies;

    public AuthController(AccountService accounts, TokenService tokens, RefreshCookies cookies) {
        this.accounts = accounts;
        this.tokens = tokens;
        this.cookies = cookies;
    }

    @GetMapping("/csrf")
    public ApiResponse<Map<String, String>> csrf(CsrfToken token) {
        return ApiResponse.ok(
                Map.of("token", token.getToken(), "headerName", token.getHeaderName()));
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ApiResponse<UserVO> register(@Valid @RequestBody RegisterRequest body) {
        return ApiResponse.ok(UserVO.from(accounts.register(body)));
    }

    @PostMapping("/login")
    public ApiResponse<TokenService.Access> login(
            @Valid @RequestBody LoginRequest body, HttpServletResponse res) {
        var issued = tokens.login(body.username(), body.password());
        cookies.write(res, issued.refresh());
        return ApiResponse.ok(issued.access());
    }

    @PostMapping("/refresh")
    public ApiResponse<TokenService.Access> refresh(
            @CookieValue(name = "REFRESH", required = false) String raw, HttpServletResponse res) {
        var issued = tokens.refresh(raw);
        cookies.write(res, issued.refresh());
        return ApiResponse.ok(issued.access());
    }

    @PostMapping("/logout")
    public ApiResponse<Void> logout(
            @CookieValue(name = "REFRESH", required = false) String raw, HttpServletResponse res) {
        tokens.logout(raw);
        cookies.write(res, "");
        return ApiResponse.ok(null);
    }

    @GetMapping("/me")
    public ApiResponse<UserVO> me(@AuthenticationPrincipal Jwt jwt) {
        return ApiResponse.ok(UserVO.from(accounts.active(Long.parseLong(jwt.getSubject()))));
    }

    @PostMapping("/password")
    public ApiResponse<Void> password(
            @AuthenticationPrincipal Jwt jwt,
            @Valid @RequestBody ChangePasswordRequest body,
            HttpServletResponse res) {
        long id = Long.parseLong(jwt.getSubject());
        accounts.changePassword(id, body.currentPassword(), body.newPassword());
        tokens.revokeAll(id);
        cookies.write(res, "");
        return ApiResponse.ok(null);
    }
}
