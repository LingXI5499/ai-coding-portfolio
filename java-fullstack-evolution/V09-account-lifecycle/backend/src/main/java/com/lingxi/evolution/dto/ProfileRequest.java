package com.lingxi.evolution.dto;

import jakarta.validation.constraints.*;

public record ProfileRequest(
        @NotBlank @Size(max = 50) String nickname, @Email @Size(max = 254) String email) {}
