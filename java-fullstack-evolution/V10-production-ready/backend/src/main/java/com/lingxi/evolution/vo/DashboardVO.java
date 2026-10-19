package com.lingxi.evolution.vo;

import java.util.List;

/** 图表只展示有界聚合结果，避免把全部用户或全部审计拉到浏览器统计。 */
public record DashboardVO(
        long totalUsers, List<UserStateCount> userStates, List<ActivityDay> activityDays) {}
