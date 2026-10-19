package com.lingxi.evolution.vo;

import java.util.UUID;

public record ApiResponse<T>(String code, String message, T data, String traceId) {
    public static <T> ApiResponse<T> ok(T data) {
        return new ApiResponse<>("SUCCESS", "操作成功", data, UUID.randomUUID().toString());
    }

    public static ApiResponse<Void> error(String code, String message) {
        return new ApiResponse<>(code, message, null, UUID.randomUUID().toString());
    }
}
