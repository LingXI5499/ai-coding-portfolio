package com.lingxi.evolution.vo;

import com.lingxi.evolution.entity.Account;

public record UserVO(
        Long id, String username, String nickname, String email, String status, String role) {
    public static UserVO from(Account u) {
        return new UserVO(
                u.getId(),
                u.getUsername(),
                u.getNickname(),
                u.getEmail(),
                u.getStatus(),
                u.getRole());
    }
}
