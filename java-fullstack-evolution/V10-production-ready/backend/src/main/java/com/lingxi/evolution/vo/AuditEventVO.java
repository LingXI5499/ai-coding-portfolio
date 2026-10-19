package com.lingxi.evolution.vo;

import java.time.LocalDateTime;

/** 管理员审计视图，由审计表与账户表的 LEFT JOIN 产生，不返回账户敏感字段。 */
public record AuditEventVO(
        long id, Long userId, String username, String action, LocalDateTime createdAt) {}
