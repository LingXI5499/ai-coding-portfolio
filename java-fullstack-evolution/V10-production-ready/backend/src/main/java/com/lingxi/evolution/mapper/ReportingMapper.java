package com.lingxi.evolution.mapper;

import com.lingxi.evolution.query.AuditQuery;
import com.lingxi.evolution.vo.ActivityDay;
import com.lingxi.evolution.vo.AuditEventVO;
import com.lingxi.evolution.vo.UserStateCount;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.time.LocalDateTime;
import java.util.List;

/** 只读报表：聚合查询与带账户名称的审计联表查询。 */
@Mapper
public interface ReportingMapper {
    List<UserStateCount> userStates();

    List<ActivityDay> activity(
            @Param("since") LocalDateTime since, @Param("until") LocalDateTime until);

    long countAudit(@Param("query") AuditQuery query);

    List<AuditEventVO> searchAudit(@Param("query") AuditQuery query);
}
