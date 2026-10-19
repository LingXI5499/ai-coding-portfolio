package com.lingxi.evolution.controller;

import com.lingxi.evolution.pagination.PageResult;
import com.lingxi.evolution.query.UserQuery;
import com.lingxi.evolution.service.AccountService;
import com.lingxi.evolution.vo.*;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/users")
public class AdminController {
    private final AccountService accounts;

    public AdminController(AccountService accounts) {
        this.accounts = accounts;
    }

    @GetMapping
    public ApiResponse<PageResult<UserVO>> list(@Valid @ModelAttribute UserQuery query) {
        return ApiResponse.ok(accounts.list(query).map(UserVO::from));
    }
}
