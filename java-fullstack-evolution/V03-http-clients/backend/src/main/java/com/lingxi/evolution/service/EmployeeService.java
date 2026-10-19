package com.lingxi.evolution.service;

import com.lingxi.evolution.entity.Employee;

import java.util.List;

public interface EmployeeService {
    List<Employee> list();

    Employee find(long id);

    Employee create(Employee employee);

    Employee update(long id, Employee employee);

    void delete(long id);
}
