package com.lingxi.evolution.controller;

import com.lingxi.evolution.dto.StatusRequest;
import com.lingxi.evolution.pagination.PageResult;
import com.lingxi.evolution.query.UserQuery;
import com.lingxi.evolution.service.*;
import com.lingxi.evolution.vo.*;

import jakarta.validation.Valid;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

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
    public ApiResponse<PageResult<UserVO>> list(@Valid @ModelAttribute UserQuery query) {
        return ApiResponse.ok(accounts.list(query).map(UserVO::from));
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
