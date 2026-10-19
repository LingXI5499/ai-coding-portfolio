package com.lingxi.evolution.controller;

import com.lingxi.evolution.entity.Employee;
import com.lingxi.evolution.pagination.PageResult;
import com.lingxi.evolution.query.EmployeeQuery;
import com.lingxi.evolution.service.EmployeeService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/** HTTP 接入层：绑定请求、校验输入并转换公开视图，业务操作交给 Service。 */
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    /** URL 查询参数绑定到 Query；@Valid 在执行 SQL 前校验页码、大小和条件范围。 */
    @GetMapping
    public PageResult<Employee> list(@Valid @ModelAttribute EmployeeQuery query) {
        return service.list(query);
    }

    @GetMapping("/{id}")
    public Employee find(@PathVariable long id) {
        return service.find(id);
    }

    /** POST 表示创建；JSON 请求体经 @RequestBody 反序列化，成功返回 HTTP 201。 */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Employee create(@RequestBody Employee employee) {
        return service.create(employee);
    }

    @PutMapping("/{id}")
    public Employee update(@PathVariable long id, @RequestBody Employee employee) {
        return service.update(id, employee);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable long id) {
        service.delete(id);
    }
}
