package com.lingxi.evolution.dto;

import jakarta.validation.constraints.*;

public record ResetRequest(
        @NotBlank @Size(max = 128) String token,
        @NotBlank @Size(min = 12, max = 64) String newPassword) {}
