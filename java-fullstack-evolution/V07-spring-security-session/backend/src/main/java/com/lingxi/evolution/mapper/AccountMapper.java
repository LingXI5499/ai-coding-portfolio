package com.lingxi.evolution.mapper;

import com.lingxi.evolution.entity.Account;

import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface AccountMapper {
    Account findByUsername(String username);

    Account findById(long id);

    int insert(Account user);

    int password(@Param("id") long id, @Param("hash") String hash);

    int profile(
            @Param("id") long id, @Param("nickname") String nickname, @Param("email") String email);

    int status(@Param("id") long id, @Param("status") String status);

    int invalidate(long id);

    List<Account> list();
}
