package com.lingxi.evolution.dto;

import jakarta.validation.constraints.*;

public record LoginRequest(
        @NotBlank @Size(max = 32) String username, @NotBlank @Size(max = 64) String password) {}
