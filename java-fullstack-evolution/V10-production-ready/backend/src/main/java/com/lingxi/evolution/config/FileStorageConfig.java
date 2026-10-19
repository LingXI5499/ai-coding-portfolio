package com.lingxi.evolution.config;

import com.aliyun.oss.ClientBuilderConfiguration;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.common.auth.DefaultCredentialProvider;
import com.aliyun.oss.common.comm.SignVersion;
import com.lingxi.evolution.storage.AssetStorage;
import com.lingxi.evolution.storage.LocalAssetStorage;
import com.lingxi.evolution.storage.OssAssetStorage;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Path;

/** 用配置选择一个存储 Bean，展示 IoC、接口隔离与外部服务适配。 */
@Configuration
public class FileStorageConfig {
    @Bean(destroyMethod = "close")
    public AssetStorage assetStorage(
            @Value("${FILES_STORAGE:local}") String mode,
            @Value("${FILES_LOCAL_ROOT:.local-uploads}") String localRoot,
            @Value("${OSS_ENDPOINT:}") String endpoint,
            @Value("${OSS_REGION:}") String region,
            @Value("${OSS_BUCKET:}") String bucket,
            @Value("${OSS_ACCESS_KEY_ID:}") String keyId,
            @Value("${OSS_ACCESS_KEY_SECRET:}") String keySecret,
            @Value("${OSS_SECURITY_TOKEN:}") String securityToken)
            throws IOException {
        if ("local".equals(mode)) {
            return new LocalAssetStorage(Path.of(localRoot));
        }
        if (!"oss".equals(mode)) {
            throw new IllegalArgumentException("FILES_STORAGE must be local or oss");
        }
        if (endpoint.isBlank()
                || region.isBlank()
                || bucket.isBlank()
                || keyId.isBlank()
                || keySecret.isBlank()) {
            throw new IllegalArgumentException("OSS configuration is incomplete");
        }
        URI uri = URI.create(endpoint);
        if (!"https".equals(uri.getScheme())
                || uri.getHost() == null
                || uri.getUserInfo() != null
                || uri.getQuery() != null
                || uri.getFragment() != null) {
            throw new IllegalArgumentException("OSS_ENDPOINT must be an HTTPS endpoint");
        }
        var credentials =
                new DefaultCredentialProvider(
                        keyId, keySecret, securityToken.isBlank() ? null : securityToken);
        var config = new ClientBuilderConfiguration();
        config.setSignatureVersion(SignVersion.V4);
        config.setConnectionTimeout(5000);
        config.setSocketTimeout(5000);
        config.setConnectionRequestTimeout(5000);
        config.setMaxErrorRetry(1);
        var client =
                OSSClientBuilder.create()
                        .endpoint(endpoint)
                        .region(region)
                        .credentialsProvider(credentials)
                        .clientConfiguration(config)
                        .build();
        return new OssAssetStorage(client, bucket);
    }
}
