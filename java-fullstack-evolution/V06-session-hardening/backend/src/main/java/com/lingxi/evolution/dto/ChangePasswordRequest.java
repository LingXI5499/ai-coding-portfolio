package com.lingxi.evolution.dto;

import jakarta.validation.constraints.*;

public record ChangePasswordRequest(
        @NotBlank @Size(max = 64) String currentPassword,
        @NotBlank @Size(min = 12, max = 64) String newPassword) {}
