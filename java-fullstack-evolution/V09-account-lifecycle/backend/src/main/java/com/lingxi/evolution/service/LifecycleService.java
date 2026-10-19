package com.lingxi.evolution.service;

import com.lingxi.evolution.entity.Account;
import com.lingxi.evolution.exception.ApiException;
import com.lingxi.evolution.mapper.LifecycleMapper;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class LifecycleService {
    private final AccountService accounts;
    private final TokenService tokens;
    private final LifecycleMapper resets;
    private final AuditService audit;

    public LifecycleService(
            AccountService accounts,
            TokenService tokens,
            LifecycleMapper resets,
            AuditService audit) {
        this.accounts = accounts;
        this.tokens = tokens;
        this.resets = resets;
        this.audit = audit;
    }

    @Transactional
    public Account profile(long id, String nickname, String email) {
        var result = accounts.profile(id, nickname, email);
        resets.invalidateResets(id);
        audit.record(id, "PROFILE_CHANGED");
        return result;
    }

    @Transactional
    public void logoutAll(long id) {
        accounts.invalidate(id);
        tokens.revokeAll(id);
        audit.record(id, "LOGOUT_ALL");
    }

    @Transactional
    public void deactivate(long id) {
        accounts.active(id);
        accounts.status(id, "DELETED");
        tokens.revokeAll(id);
        resets.invalidateResets(id);
        audit.record(id, "ACCOUNT_DELETED");
    }

    @Transactional
    public void status(long actor, long id, String status) {
        if (actor == id) {
            throw new ApiException(409, "SELF_DISABLE", "管理员不能修改自身状态");
        }
        accounts.status(id, status);
        tokens.revokeAll(id);
        resets.invalidateResets(id);
        audit.record(id, "STATUS_" + status);
    }
}
