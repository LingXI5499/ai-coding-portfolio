package com.lingxi.evolution.service;

import com.lingxi.evolution.annotation.ObservedOperation;
import com.lingxi.evolution.mapper.ReportingMapper;
import com.lingxi.evolution.pagination.PageResult;
import com.lingxi.evolution.query.AuditQuery;
import com.lingxi.evolution.vo.ActivityDay;
import com.lingxi.evolution.vo.AuditEventVO;
import com.lingxi.evolution.vo.DashboardVO;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Clock;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/** 构造函数注入让 Spring 管理依赖；只读事务把同次报表查询放在一致的业务边界内。 */
@Service
public class ReportingService {
    private final ReportingMapper mapper;
    private final Clock clock;

    public ReportingService(ReportingMapper mapper, Clock clock) {
        this.mapper = mapper;
        this.clock = clock;
    }

    @ObservedOperation("DASHBOARD_READ")
    @Transactional(readOnly = true)
    public DashboardVO dashboard() {
        var states = mapper.userStates();
        LocalDate today = LocalDate.now(clock);
        LocalDate first = today.minusDays(6);
        var counts =
                mapper.activity(first.atStartOfDay(), today.plusDays(1).atStartOfDay()).stream()
                        .collect(Collectors.toMap(ActivityDay::day, ActivityDay::total));
        List<ActivityDay> days = new ArrayList<>();
        for (int offset = 0; offset < 7; offset++) {
            LocalDate day = first.plusDays(offset);
            days.add(new ActivityDay(day, counts.getOrDefault(day, 0L)));
        }
        return new DashboardVO(states.stream().mapToLong(item -> item.total()).sum(), states, days);
    }

    @ObservedOperation("AUDIT_READ")
    @Transactional(readOnly = true)
    public PageResult<AuditEventVO> audit(AuditQuery query) {
        long total = mapper.countAudit(query);
        return PageResult.of(total == 0 ? List.of() : mapper.searchAudit(query), total, query);
    }
}
