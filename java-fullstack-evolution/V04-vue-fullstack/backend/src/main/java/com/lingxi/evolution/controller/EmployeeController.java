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
    public ApiResponse<PageResult<EmployeeVO>> list(@Valid @ModelAttribute EmployeeQuery query) {
        return ApiResponse.ok(service.list(query).map(EmployeeVO::from));
    }

    @GetMapping("/{id}")
    public ApiResponse<EmployeeVO> find(@PathVariable long id) {
        return ApiResponse.ok(EmployeeVO.from(service.find(id)));
    }

    /** POST 表示创建；JSON 请求体经 @RequestBody 反序列化，成功返回 HTTP 201。 */
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
