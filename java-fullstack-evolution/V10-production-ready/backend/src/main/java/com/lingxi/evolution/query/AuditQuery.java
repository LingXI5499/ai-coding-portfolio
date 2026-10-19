package com.lingxi.evolution.query;

import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

/** 查询条件使用参数绑定；action 只允许固定审计动作所用的字符。 */
public class AuditQuery extends PageQuery {
    @Size(max = 50)
    private String keyword;

    @Pattern(regexp = "[A-Z_]{1,50}")
    private String action;

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword == null || keyword.isBlank() ? null : keyword.trim();
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action == null || action.isBlank() ? null : action.trim();
    }

    public String getKeywordPattern() {
        return LikePattern.contains(keyword);
    }
}
