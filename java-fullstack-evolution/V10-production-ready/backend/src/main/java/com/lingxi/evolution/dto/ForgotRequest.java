package com.lingxi.evolution.dto;

import jakarta.validation.constraints.*;

public record ForgotRequest(@NotBlank @Pattern(regexp = "[a-z0-9_]{3,32}") String username) {}
