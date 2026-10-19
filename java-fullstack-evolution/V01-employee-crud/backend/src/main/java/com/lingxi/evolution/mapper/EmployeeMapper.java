package com.lingxi.evolution.mapper;

import com.lingxi.evolution.entity.Employee;
import com.lingxi.evolution.query.EmployeeQuery;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface EmployeeMapper {
    long count(@Param("query") EmployeeQuery query);

    List<Employee> search(@Param("query") EmployeeQuery query);

    Employee findById(long id);

    int insert(Employee employee);

    int update(Employee employee);

    int delete(long id);
}
