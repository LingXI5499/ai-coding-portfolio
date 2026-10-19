package com.lingxi.evolution.dto;

import com.lingxi.evolution.entity.Employee;

import jakarta.validation.constraints.*;

import java.math.BigDecimal;

public record EmployeeUpdateRequest(
        @NotBlank @Size(max = 50) String name,
        @NotBlank @Pattern(regexp = "男|女|未说明") String gender,
        @NotNull @Min(18) @Max(70) Integer age,
        @Size(max = 20) String phone,
        @NotBlank @Size(max = 100) String department,
        @NotNull @DecimalMin("0.00") @Digits(integer = 8, fraction = 2) BigDecimal salary) {
    public Employee toEntity() {
        var e = new Employee();
        e.setName(name);
        e.setGender(gender);
        e.setAge(age);
        e.setPhone(phone);
        e.setDepartment(department);
        e.setSalary(salary);
        return e;
    }
}
