package com.lingxi.evolution.controller;

import com.lingxi.evolution.dto.StatusRequest;
import com.lingxi.evolution.service.*;
import com.lingxi.evolution.vo.*;

import jakarta.validation.Valid;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/users")
public class AdminController {
    private final AccountService accounts;
    private final LifecycleService lifecycle;

    public AdminController(AccountService accounts, LifecycleService lifecycle) {
        this.accounts = accounts;
        this.lifecycle = lifecycle;
    }

    @GetMapping
    public ApiResponse<List<UserVO>> list() {
        return ApiResponse.ok(accounts.list().stream().map(UserVO::from).toList());
    }

    @PatchMapping("/{id}/status")
    public ApiResponse<Void> status(
            @AuthenticationPrincipal Jwt jwt,
            @PathVariable long id,
            @Valid @RequestBody StatusRequest body) {
        lifecycle.status(Long.parseLong(jwt.getSubject()), id, body.status());
        return ApiResponse.ok(null);
    }
}
