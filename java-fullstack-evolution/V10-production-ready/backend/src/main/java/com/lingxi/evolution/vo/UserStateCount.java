package com.lingxi.evolution.vo;

/** 数据库 GROUP BY 的结果，供状态饼图使用。 */
public record UserStateCount(String status, long total) {}
