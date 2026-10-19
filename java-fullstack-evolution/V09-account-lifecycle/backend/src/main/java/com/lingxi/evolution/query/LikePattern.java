package com.lingxi.evolution.query;

/** 用 ! 作为 SQL LIKE 转义符，使用户输入的 % 和 _ 按普通字符查询。 */
public final class LikePattern {
    private LikePattern() {}

    public static String contains(String value) {
        if (value == null || value.isBlank()) {
            return null;
        }
        return "%" + value.trim().replace("!", "!!").replace("%", "!%").replace("_", "!_") + "%";
    }
}
