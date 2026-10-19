package com.lingxi.evolution.controller;

import com.lingxi.evolution.dto.*;
import com.lingxi.evolution.security.RefreshCookies;
import com.lingxi.evolution.service.*;
import com.lingxi.evolution.vo.*;

import jakarta.servlet.http.*;
import jakarta.validation.Valid;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

@RestController
public class LifecycleController {
    private final LifecycleService lifecycle;
    private final PasswordResetService resets;
    private final RefreshCookies cookies;

    public LifecycleController(
            LifecycleService lifecycle, PasswordResetService resets, RefreshCookies cookies) {
        this.lifecycle = lifecycle;
        this.resets = resets;
        this.cookies = cookies;
    }

    @PutMapping("/api/account/profile")
    public ApiResponse<UserVO> profile(
            @AuthenticationPrincipal Jwt jwt, @Valid @RequestBody ProfileRequest body) {
        return ApiResponse.ok(
                UserVO.from(
                        lifecycle.profile(
                                Long.parseLong(jwt.getSubject()), body.nickname(), body.email())));
    }

    @PostMapping("/api/auth/logout-all")
    public ApiResponse<Void> logoutAll(@AuthenticationPrincipal Jwt jwt, HttpServletResponse res) {
        lifecycle.logoutAll(Long.parseLong(jwt.getSubject()));
        cookies.write(res, "");
        return ApiResponse.ok(null);
    }

    @DeleteMapping("/api/account")
    public ApiResponse<Void> deactivate(@AuthenticationPrincipal Jwt jwt, HttpServletResponse res) {
        lifecycle.deactivate(Long.parseLong(jwt.getSubject()));
        cookies.write(res, "");
        return ApiResponse.ok(null);
    }

    @PostMapping("/api/auth/forgot-password")
    public ApiResponse<Void> forgot(
            @Valid @RequestBody ForgotRequest body, HttpServletRequest req) {
        resets.request(body.username(), req.getRemoteAddr());
        return ApiResponse.ok(null);
    }

    @PostMapping("/api/auth/reset-password")
    public ApiResponse<Void> reset(@Valid @RequestBody ResetRequest body, HttpServletRequest req) {
        resets.reset(body.token(), body.newPassword(), req.getRemoteAddr());
        return ApiResponse.ok(null);
    }
}
