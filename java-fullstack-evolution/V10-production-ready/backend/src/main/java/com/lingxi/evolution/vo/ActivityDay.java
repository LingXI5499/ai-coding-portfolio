package com.lingxi.evolution.vo;

import java.time.LocalDate;

/** UTC 自然日内的审计事件数；没有事件的日期由服务层补零。 */
public record ActivityDay(LocalDate day, long total) {}
