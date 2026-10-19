package com.lingxi.evolution.mapper;

import org.apache.ibatis.annotations.*;

import java.time.LocalDateTime;

@Mapper
public interface LifecycleMapper {
    int audit(@Param("userId") Long userId, @Param("action") String action);

    int reset(
            @Param("hash") String hash,
            @Param("userId") long userId,
            @Param("expires") LocalDateTime expires);

    Long resetUser(String hash);

    int consumeReset(@Param("hash") String hash, @Param("now") LocalDateTime now);

    int invalidateResets(long userId);
}
