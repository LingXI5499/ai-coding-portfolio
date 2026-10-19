package com.lingxi.evolution.controller;

import com.lingxi.evolution.entity.Employee;
import com.lingxi.evolution.pagination.PageResult;
import com.lingxi.evolution.query.EmployeeQuery;
import com.lingxi.evolution.service.EmployeeService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    @GetMapping
    public PageResult<Employee> list(@Valid @ModelAttribute EmployeeQuery query) {
        return service.list(query);
    }

    @GetMapping("/{id}")
    public Employee find(@PathVariable long id) {
        return service.find(id);
    }

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
