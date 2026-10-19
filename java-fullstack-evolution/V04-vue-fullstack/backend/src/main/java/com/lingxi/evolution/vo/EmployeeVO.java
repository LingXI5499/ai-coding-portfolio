package com.lingxi.evolution.vo;

import com.lingxi.evolution.entity.Employee;

import java.math.BigDecimal;

public record EmployeeVO(
        Long id,
        String name,
        String gender,
        Integer age,
        String phone,
        String department,
        BigDecimal salary) {
    public static EmployeeVO from(Employee e) {
        return new EmployeeVO(
                e.getId(),
                e.getName(),
                e.getGender(),
                e.getAge(),
                e.getPhone(),
                e.getDepartment(),
                e.getSalary());
    }
}
