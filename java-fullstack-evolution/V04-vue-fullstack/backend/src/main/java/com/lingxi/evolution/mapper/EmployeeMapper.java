package com.lingxi.evolution.mapper;

import com.lingxi.evolution.entity.Employee;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface EmployeeMapper {
    List<Employee> findAll();

    Employee findById(long id);

    int insert(Employee employee);

    int update(Employee employee);

    int delete(long id);
}
