package com.lingxi.evolution.service;

import com.lingxi.evolution.exception.ApiException;
import com.lingxi.evolution.mapper.AccountMapper;
import com.lingxi.evolution.mapper.LifecycleMapper;

import org.springframework.stereotype.Service;

/** 只记录内部 ID、固定动作与时间；逻辑关联由应用层校验。 */
@Service
public class AuditService {
    private final LifecycleMapper mapper;
    private final AccountMapper accounts;

    public AuditService(LifecycleMapper mapper, AccountMapper accounts) {
        this.mapper = mapper;
        this.accounts = accounts;
    }

    public void record(Long id, String action) {
        if (id != null && accounts.findById(id) == null) {
            throw new ApiException(404, "USER_NOT_FOUND", "关联用户不存在");
        }
        mapper.audit(id, action);
    }
}
