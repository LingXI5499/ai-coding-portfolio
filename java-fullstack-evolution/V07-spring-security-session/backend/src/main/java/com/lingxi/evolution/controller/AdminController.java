package com.lingxi.evolution.controller;

import com.lingxi.evolution.service.AccountService;
import com.lingxi.evolution.vo.*;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/users")
public class AdminController {
    private final AccountService accounts;

    public AdminController(AccountService accounts) {
        this.accounts = accounts;
    }

    @GetMapping
    public ApiResponse<List<UserVO>> list() {
        return ApiResponse.ok(accounts.list().stream().map(UserVO::from).toList());
    }
}
