package com.lingxi.evolution.controller;

import com.lingxi.evolution.dto.*;
import com.lingxi.evolution.security.AccountPrincipal;
import com.lingxi.evolution.service.AccountService;
import com.lingxi.evolution.vo.*;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AccountService accounts;

    public AuthController(AccountService accounts) {
        this.accounts = accounts;
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

    @GetMapping("/me")
    public ApiResponse<UserVO> me(@AuthenticationPrincipal AccountPrincipal user) {
        return ApiResponse.ok(UserVO.from(accounts.active(user.id())));
    }

    @PostMapping("/password")
    public ApiResponse<Void> password(
            @AuthenticationPrincipal AccountPrincipal user,
            @Valid @RequestBody ChangePasswordRequest body,
            HttpServletRequest req) {
        accounts.changePassword(user.id(), body.currentPassword(), body.newPassword());
        req.getSession().invalidate();
        return ApiResponse.ok(null);
    }
}
