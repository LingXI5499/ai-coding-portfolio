package com.lingxi.evolution.mapper;

import com.lingxi.evolution.entity.UploadedFile;
import com.lingxi.evolution.query.PageQuery;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** 文件的每次读取都携带服务端确定的 ownerId，不能按客户端指定用户读取。 */
@Mapper
public interface FileMapper {
    Long lockOwner(long ownerId);

    long count(long ownerId);

    int insert(UploadedFile file);

    UploadedFile findOwned(@Param("id") long id, @Param("ownerId") long ownerId);

    List<UploadedFile> search(@Param("ownerId") long ownerId, @Param("query") PageQuery query);
}
