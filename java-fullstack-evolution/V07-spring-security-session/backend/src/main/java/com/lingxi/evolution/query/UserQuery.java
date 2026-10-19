package com.lingxi.evolution.query;

import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

/** 管理员条件查询；查询参数不会改变服务端的 ADMIN 授权规则。 */
public class UserQuery extends PageQuery {
    @Size(max = 50)
    private String keyword;

    @Pattern(regexp = "ACTIVE|DISABLED|DELETED")
    private String status;

    @Pattern(regexp = "USER|ADMIN")
    private String role;

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = normalize(keyword);
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = normalize(status);
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = normalize(role);
    }

    public String getKeywordPattern() {
        return LikePattern.contains(keyword);
    }

    private static String normalize(String value) {
        return value == null || value.isBlank() ? null : value.trim();
    }
}
