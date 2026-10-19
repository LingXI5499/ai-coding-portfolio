package com.lingxi.evolution.dto;

import jakarta.validation.constraints.*;

public record RegisterRequest(
        @NotBlank @Pattern(regexp = "[a-z0-9_]{3,32}") String username,
        @NotBlank @Size(min = 12, max = 64) String password,
        @NotBlank @Size(max = 50) String nickname,
        @Email @Size(max = 254) String email) {}
