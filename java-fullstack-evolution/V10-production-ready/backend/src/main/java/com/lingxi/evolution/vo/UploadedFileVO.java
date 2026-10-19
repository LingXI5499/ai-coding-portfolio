package com.lingxi.evolution.vo;

import com.lingxi.evolution.entity.UploadedFile;

import java.time.LocalDateTime;

/** 公开元数据不包含存储路径、Bucket、用户凭据或可绕过鉴权的 URL。 */
public record UploadedFileVO(
        Long id,
        String originalName,
        String contentType,
        long size,
        String sha256,
        LocalDateTime createdAt) {
    public static UploadedFileVO from(UploadedFile file) {
        return new UploadedFileVO(
                file.getId(),
                file.getOriginalName(),
                file.getContentType(),
                file.getSize(),
                file.getSha256(),
                file.getCreatedAt());
    }
}
