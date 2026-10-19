package com.lingxi.evolution.controller;

import com.lingxi.evolution.config.SessionGuard;
import com.lingxi.evolution.dto.*;
import com.lingxi.evolution.service.AccountService;
import com.lingxi.evolution.vo.*;

import jakarta.servlet.http.*;
import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
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
    public ApiResponse<Map<String, String>> csrf(HttpServletRequest req) {
        return ApiResponse.ok(
                Map.of(
                        "token",
                        SessionGuard.token(req.getSession()),
                        "headerName",
                        "X-CSRF-TOKEN"));
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ApiResponse<UserVO> register(@Valid @RequestBody RegisterRequest body) {
        return ApiResponse.ok(UserVO.from(accounts.register(body)));
    }

    @PostMapping("/login")
    public ApiResponse<UserVO> login(
            @Valid @RequestBody LoginRequest body, HttpServletRequest req) {
        var user = accounts.verify(body.username(), body.password());
        var session = req.getSession();
        req.changeSessionId();
        session.setAttribute("USER_ID", user.getId());
        session.setAttribute("AUTH_VERSION", user.getAuthVersion());
        return ApiResponse.ok(UserVO.from(user));
    }

    @GetMapping("/me")
    public ApiResponse<UserVO> me(HttpServletRequest req) {
        return ApiResponse.ok(UserVO.from(accounts.active((Long) req.getAttribute("ACCOUNT_ID"))));
    }

    @PostMapping("/logout")
    public ApiResponse<Void> logout(HttpServletRequest req) {
        req.getSession().invalidate();
        return ApiResponse.ok(null);
    }

    @PostMapping("/password")
    public ApiResponse<Void> password(
            @Valid @RequestBody ChangePasswordRequest body, HttpServletRequest req) {
        accounts.changePassword(
                (Long) req.getAttribute("ACCOUNT_ID"), body.currentPassword(), body.newPassword());
        req.getSession().invalidate();
        return ApiResponse.ok(null);
    }
}
