package com.lingxi.evolution.service.impl;

import com.lingxi.evolution.entity.Employee;
import com.lingxi.evolution.mapper.EmployeeMapper;
import com.lingxi.evolution.pagination.PageResult;
import com.lingxi.evolution.query.EmployeeQuery;
import com.lingxi.evolution.service.EmployeeService;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/** 业务边界：协调 Mapper 和事务，控制器不直接操作数据库。 */
@Service
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeMapper mapper;

    public EmployeeServiceImpl(EmployeeMapper mapper) {
        this.mapper = mapper;
    }

    /** 同一筛选执行总数和当前页查询，分页大小不代表匹配总数。 */
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

    /** 忽略客户端 ID，由数据库生成主键，再回查数据库实际保存的字段。 */
    @Transactional
    public Employee create(Employee employee) {
        employee.setId(null);
        mapper.insert(employee);
        return find(employee.getId());
    }

    /** URL 中的 ID 是目标主键；先确认记录存在，再更新允许修改的业务字段。 */
    @Transactional
    public Employee update(long id, Employee employee) {
        find(id);
        employee.setId(id);
        mapper.update(employee);
        return find(id);
    }

    /** 根据影响行数区分删除成功与资源不存在，不将不存在的记录视作成功。 */
    @Transactional
    public void delete(long id) {
        if (mapper.delete(id) == 0) {
            throw new com.lingxi.evolution.exception.ApiException(
                    404, "EMPLOYEE_NOT_FOUND", "员工不存在");
        }
    }
}
