package com.lingxi.evolution.storage;

import com.aliyun.oss.OSS;
import com.aliyun.oss.model.ObjectMetadata;
import com.lingxi.evolution.exception.ApiException;

import java.io.ByteArrayInputStream;
import java.io.IOException;

/** 使用私有 Bucket；只通过后端鉴权读取，不生成公共 URL，不把凭据交给浏览器。 */
public class OssAssetStorage implements AssetStorage {
    private final OSS client;
    private final String bucket;

    public OssAssetStorage(OSS client, String bucket) {
        this.client = client;
        this.bucket = bucket;
    }

    private String objectName(String key) {
        if (!key.matches("[a-f0-9-]{36}\\.png")) {
            throw new IllegalArgumentException("Invalid server object key");
        }
        return "learning-uploads/" + key;
    }

    @Override
    public void put(String key, byte[] bytes) {
        String name = objectName(key);
        var metadata = new ObjectMetadata();
        metadata.setContentLength(bytes.length);
        metadata.setContentType("image/png");
        try (var input = new ByteArrayInputStream(bytes)) {
            client.putObject(bucket, name, input, metadata);
        } catch (RuntimeException | IOException error) {
            throw unavailable();
        }
    }

    @Override
    public byte[] get(String key) {
        String name = objectName(key);
        try (var object = client.getObject(bucket, name);
                var input = object.getObjectContent()) {
            byte[] bytes = input.readNBytes(ImageNormalizer.MAX_BYTES + 1);
            if (bytes.length > ImageNormalizer.MAX_BYTES) {
                throw unavailable();
            }
            return bytes;
        } catch (RuntimeException | IOException error) {
            throw unavailable();
        }
    }

    @Override
    public void delete(String key) {
        String name = objectName(key);
        try {
            client.deleteObject(bucket, name);
        } catch (RuntimeException error) {
            throw unavailable();
        }
    }

    @Override
    public void close() {
        client.shutdown();
    }

    private ApiException unavailable() {
        return new ApiException(503, "STORAGE_UNAVAILABLE", "对象存储暂时不可用");
    }
}
