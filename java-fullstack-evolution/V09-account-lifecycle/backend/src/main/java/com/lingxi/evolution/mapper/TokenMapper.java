package com.lingxi.evolution.mapper;

import com.lingxi.evolution.entity.RefreshToken;

import org.apache.ibatis.annotations.*;

import java.time.LocalDateTime;

@Mapper
public interface TokenMapper {
    RefreshToken find(String hash);

    int insert(RefreshToken token);

    int consume(@Param("hash") String hash, @Param("now") LocalDateTime now);

    int revoke(String hash);

    int revokeFamily(String familyId);

    int revokeAll(long userId);
}
