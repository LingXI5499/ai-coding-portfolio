package com.lingxi.evolution.service;

import com.lingxi.evolution.annotation.ObservedOperation;
import com.lingxi.evolution.entity.UploadedFile;
import com.lingxi.evolution.exception.ApiException;
import com.lingxi.evolution.mapper.FileMapper;
import com.lingxi.evolution.pagination.PageResult;
import com.lingxi.evolution.query.PageQuery;
import com.lingxi.evolution.storage.AssetStorage;
import com.lingxi.evolution.storage.ImageNormalizer;
import com.lingxi.evolution.vo.UploadedFileVO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionSynchronization;
import org.springframework.transaction.support.TransactionSynchronizationManager;
import org.springframework.web.multipart.MultipartFile;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HexFormat;
import java.util.List;
import java.util.UUID;

/** 上传流程：验证内容 → 锁定账户/配额 → 保存对象 → 元数据与审计入库 → 提交。 */
@Service
public class FileService {
    private static final Logger LOG = LoggerFactory.getLogger(FileService.class);
    private static final int FILES_PER_ACCOUNT = 20;
    private final FileMapper mapper;
    private final ImageNormalizer images;
    private final AssetStorage storage;
    private final AuditService audit;

    public FileService(
            FileMapper mapper, ImageNormalizer images, AssetStorage storage, AuditService audit) {
        this.mapper = mapper;
        this.images = images;
        this.storage = storage;
        this.audit = audit;
    }

    @ObservedOperation("FILE_UPLOAD")
    @Transactional
    public UploadedFileVO upload(long ownerId, MultipartFile multipart) {
        var image = images.normalize(multipart);
        if (mapper.lockOwner(ownerId) == null) {
            throw new ApiException(401, "UNAUTHENTICATED", "账户不可用，请重新登录");
        }
        if (mapper.count(ownerId) >= FILES_PER_ACCOUNT) {
            throw new ApiException(409, "FILE_QUOTA_EXCEEDED", "学习环境每个账户最多保留 20 张图片");
        }
        String key = UUID.randomUUID() + ".png";
        // 数据库事务无法自动回滚文件/OSS，注册回滚补偿，并在网络写入前开始保护。
        TransactionSynchronizationManager.registerSynchronization(
                new TransactionSynchronization() {
                    @Override
                    public void afterCompletion(int status) {
                        if (status != STATUS_COMMITTED) {
                            try {
                                storage.delete(key);
                            } catch (RuntimeException failure) {
                                LOG.warn(
                                        "Upload rollback cleanup failed; storage reconciliation is"
                                            + " required");
                            }
                        }
                    }
                });
        storage.put(key, image.bytes());
        var file = new UploadedFile();
        file.setUserId(ownerId);
        file.setObjectKey(key);
        file.setOriginalName(image.originalName());
        file.setContentType("image/png");
        file.setSize(image.bytes().length);
        file.setSha256(digest(image.bytes()));
        mapper.insert(file);
        audit.record(ownerId, "FILE_UPLOADED");
        return UploadedFileVO.from(owned(ownerId, file.getId()));
    }

    @Transactional(readOnly = true)
    public PageResult<UploadedFileVO> list(long ownerId, PageQuery query) {
        long total = mapper.count(ownerId);
        return PageResult.of(
                        total == 0 ? List.<UploadedFile>of() : mapper.search(ownerId, query),
                        total,
                        query)
                .map(UploadedFileVO::from);
    }

    @Transactional(readOnly = true)
    public byte[] content(long ownerId, long id) {
        var file = owned(ownerId, id);
        byte[] bytes = storage.get(file.getObjectKey());
        if (bytes.length != file.getSize() || !digest(bytes).equals(file.getSha256())) {
            throw new ApiException(503, "FILE_INTEGRITY_ERROR", "文件校验失败，请联系维护者");
        }
        return bytes;
    }

    private UploadedFile owned(long ownerId, long id) {
        var file = mapper.findOwned(id, ownerId);
        if (file == null) {
            // 不暴露这个 ID 是否属于其他用户。
            throw new ApiException(404, "FILE_NOT_FOUND", "文件不存在");
        }
        return file;
    }

    private String digest(byte[] bytes) {
        try {
            return HexFormat.of().formatHex(MessageDigest.getInstance("SHA-256").digest(bytes));
        } catch (NoSuchAlgorithmException impossible) {
            throw new IllegalStateException(
                    "Required SHA-256 implementation is missing", impossible);
        }
    }
}
