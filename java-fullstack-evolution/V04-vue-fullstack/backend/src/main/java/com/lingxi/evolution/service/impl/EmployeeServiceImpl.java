package com.lingxi.evolution.service.impl;

import com.lingxi.evolution.entity.Employee;
import com.lingxi.evolution.mapper.EmployeeMapper;
import com.lingxi.evolution.pagination.PageResult;
import com.lingxi.evolution.query.EmployeeQuery;
import com.lingxi.evolution.service.EmployeeService;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeMapper mapper;

    public EmployeeServiceImpl(EmployeeMapper mapper) {
        this.mapper = mapper;
    }

    @Transactional(readOnly = true)
    public PageResult<Employee> list(EmployeeQuery query) {
        long total = mapper.count(query);
        return PageResult.of(total == 0 ? List.of() : mapper.search(query), total, query);
    }

    public Employee find(long id) {
        var employee = mapper.findById(id);
        if (employee == null) {
            throw new com.lingxi.evolution.exception.ApiException(
                    404, "EMPLOYEE_NOT_FOUND", "员工不存在");
        }
        return employee;
    }

    @Transactional
    public Employee create(Employee employee) {
        employee.setId(null);
        mapper.insert(employee);
        return find(employee.getId());
    }

    @Transactional
    public Employee update(long id, Employee employee) {
        find(id);
        employee.setId(id);
        mapper.update(employee);
        return find(id);
    }

    @Transactional
    public void delete(long id) {
        if (mapper.delete(id) == 0) {
            throw new com.lingxi.evolution.exception.ApiException(
                    404, "EMPLOYEE_NOT_FOUND", "员工不存在");
        }
    }
}
