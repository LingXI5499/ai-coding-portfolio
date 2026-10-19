package com.lingxi.evolution.mapper;

import com.lingxi.evolution.entity.Account;
import com.lingxi.evolution.query.UserQuery;

import org.apache.ibatis.annotations.*;
import org.apache.ibatis.annotations.Param;

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

    long count(@Param("query") UserQuery query);

    List<Account> search(@Param("query") UserQuery query);
}
