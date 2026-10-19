package com.lingxi.evolution.service;

import com.lingxi.evolution.entity.Employee;
import com.lingxi.evolution.pagination.PageResult;
import com.lingxi.evolution.query.EmployeeQuery;

public interface EmployeeService {
    PageResult<Employee> list(EmployeeQuery query);

    Employee find(long id);

    Employee create(Employee employee);

    Employee update(long id, Employee employee);

    void delete(long id);
}
