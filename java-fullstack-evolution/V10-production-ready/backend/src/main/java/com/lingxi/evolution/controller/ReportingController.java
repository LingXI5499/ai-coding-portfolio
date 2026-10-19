package com.lingxi.evolution.controller;

import com.lingxi.evolution.pagination.PageResult;
import com.lingxi.evolution.query.AuditQuery;
import com.lingxi.evolution.service.ReportingService;
import com.lingxi.evolution.vo.ApiResponse;
import com.lingxi.evolution.vo.AuditEventVO;
import com.lingxi.evolution.vo.DashboardVO;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/** /api/admin/** 的 ADMIN 校验由安全过滤链统一执行。 */
@RestController
@RequestMapping("/api/admin")
public class ReportingController {
    private final ReportingService reports;

    public ReportingController(ReportingService reports) {
        this.reports = reports;
    }

    @GetMapping("/dashboard")
    public ApiResponse<DashboardVO> dashboard() {
        return ApiResponse.ok(reports.dashboard());
    }

    @GetMapping("/audit-events")
    public ApiResponse<PageResult<AuditEventVO>> audit(@Valid @ModelAttribute AuditQuery query) {
        return ApiResponse.ok(reports.audit(query));
    }
}
