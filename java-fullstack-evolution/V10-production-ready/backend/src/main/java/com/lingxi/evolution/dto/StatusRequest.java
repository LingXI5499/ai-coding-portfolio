package com.lingxi.evolution.dto;

import jakarta.validation.constraints.*;

public record StatusRequest(@NotBlank @Pattern(regexp = "ACTIVE|DISABLED") String status) {}
