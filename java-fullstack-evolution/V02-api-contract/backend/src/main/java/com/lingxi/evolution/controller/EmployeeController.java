package com.lingxi.evolution.controller;

import com.lingxi.evolution.dto.EmployeeCreateRequest;
import com.lingxi.evolution.dto.EmployeeUpdateRequest;
import com.lingxi.evolution.pagination.PageResult;
import com.lingxi.evolution.query.EmployeeQuery;
import com.lingxi.evolution.service.EmployeeService;
import com.lingxi.evolution.vo.*;

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
    public ApiResponse<PageResult<EmployeeVO>> list(@Valid @ModelAttribute EmployeeQuery query) {
        return ApiResponse.ok(service.list(query).map(EmployeeVO::from));
    }

    @GetMapping("/{id}")
    public ApiResponse<EmployeeVO> find(@PathVariable long id) {
        return ApiResponse.ok(EmployeeVO.from(service.find(id)));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ApiResponse<EmployeeVO> create(@Valid @RequestBody EmployeeCreateRequest request) {
        return ApiResponse.ok(EmployeeVO.from(service.create(request.toEntity())));
    }

    @PutMapping("/{id}")
    public ApiResponse<EmployeeVO> update(
            @PathVariable long id, @Valid @RequestBody EmployeeUpdateRequest request) {
        return ApiResponse.ok(EmployeeVO.from(service.update(id, request.toEntity())));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable long id) {
        service.delete(id);
        return ApiResponse.ok(null);
    }
}
