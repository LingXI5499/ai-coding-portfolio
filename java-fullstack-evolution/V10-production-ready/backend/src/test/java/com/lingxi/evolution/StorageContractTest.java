package com.lingxi.evolution;

import static org.assertj.core.api.Assertions.*;

import com.aliyun.oss.ClientBuilderConfiguration;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.common.auth.DefaultCredentialProvider;
import com.aliyun.oss.common.comm.SignVersion;
import com.lingxi.evolution.config.FileStorageConfig;
import com.lingxi.evolution.exception.ApiException;
import com.lingxi.evolution.storage.ImageNormalizer;
import com.lingxi.evolution.storage.LocalAssetStorage;
import com.lingxi.evolution.storage.OssAssetStorage;
import com.sun.net.httpserver.HttpServer;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import org.springframework.mock.web.MockMultipartFile;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicReference;

import javax.imageio.ImageIO;

class StorageContractTest {
    @TempDir Path root;
    private static final String KEY = "01234567-0123-0123-0123-012345678901.png";

    @Test
    void localStorageRoundTripAndTraversalProtection() throws Exception {
        var storage = new LocalAssetStorage(root);
        storage.put(KEY, new byte[] {1, 2, 3});
        assertThat(storage.get(KEY)).containsExactly(1, 2, 3);
        assertThatIllegalArgumentException().isThrownBy(() -> storage.get("../secret.png"));
        storage.delete(KEY);
        storage.delete(KEY);
        assertThatThrownBy(() -> storage.get(KEY)).isInstanceOf(ApiException.class);
    }

    @Test
    void imageDimensionsAndDeclaredTypeAreVerified() throws Exception {
        var output = new ByteArrayOutputStream();
        ImageIO.write(new BufferedImage(2001, 2000, BufferedImage.TYPE_INT_RGB), "png", output);
        var normalizer = new ImageNormalizer();
        var huge = new MockMultipartFile("file", "large.png", "image/png", output.toByteArray());
        assertThatThrownBy(() -> normalizer.normalize(huge)).isInstanceOf(ApiException.class);
        var png = FileAndReportingIntegrationTest.image();
        var falseMime = new MockMultipartFile("file", "fake.jpg", "image/jpeg", png.getBytes());
        assertThatThrownBy(() -> normalizer.normalize(falseMime)).isInstanceOf(ApiException.class);
    }

    @Test
    void invalidStorageSelectionAndIncompleteCloudConfigurationFailClosed() {
        var config = new FileStorageConfig();
        assertThatIllegalArgumentException()
                .isThrownBy(
                        () -> config.assetStorage("typo", root.toString(), "", "", "", "", "", ""));
        assertThatIllegalArgumentException()
                .isThrownBy(
                        () -> config.assetStorage("oss", root.toString(), "", "", "", "", "", ""));
        assertThatIllegalArgumentException()
                .isThrownBy(
                        () ->
                                config.assetStorage(
                                        "oss",
                                        root.toString(),
                                        "http://example.invalid",
                                        "region",
                                        "bucket",
                                        "test-id",
                                        "test-secret",
                                        ""));
    }

    @Test
    void realOssSdkRoundTripAndErrorParsingAgainstLoopbackStub() throws Exception {
        // 使用真实 SDK 与环回 HTTP 服务验证适配器协议，不访问或声称验收真实云账户。
        var server = HttpServer.create(new InetSocketAddress("127.0.0.1", 0), 0);
        var stored = new AtomicReference<byte[]>();
        var failure = new AtomicBoolean(false);
        server.createContext(
                "/",
                exchange -> {
                    if (failure.get()) {
                        exchange.getRequestBody().readAllBytes();
                        byte[] body =
                                "<Error><Code>AccessDenied</Code><Message>private-test-detail</Message><RequestId>fixture</RequestId><HostId>local</HostId></Error>"
                                        .getBytes(StandardCharsets.UTF_8);
                        exchange.getResponseHeaders().set("Content-Type", "application/xml");
                        exchange.sendResponseHeaders(403, body.length);
                        exchange.getResponseBody().write(body);
                    } else if ("PUT".equals(exchange.getRequestMethod())) {
                        stored.set(exchange.getRequestBody().readAllBytes());
                        exchange.getResponseHeaders().set("ETag", "\"test-etag\"");
                        exchange.sendResponseHeaders(200, -1);
                    } else if ("GET".equals(exchange.getRequestMethod())) {
                        byte[] body = stored.get();
                        exchange.getResponseHeaders().set("Content-Type", "image/png");
                        exchange.sendResponseHeaders(200, body.length);
                        exchange.getResponseBody().write(body);
                    } else {
                        stored.set(null);
                        exchange.sendResponseHeaders(204, -1);
                    }
                    exchange.close();
                });
        server.start();
        var config = new ClientBuilderConfiguration();
        config.setSignatureVersion(SignVersion.V4);
        config.setSLDEnabled(true);
        config.setMaxErrorRetry(0);
        var client =
                OSSClientBuilder.create()
                        .endpoint("http://127.0.0.1:" + server.getAddress().getPort())
                        .region("cn-hangzhou")
                        .credentialsProvider(
                                new DefaultCredentialProvider("unit-test-id", "unit-test-secret"))
                        .clientConfiguration(config)
                        .build();
        try (var storage = new OssAssetStorage(client, "test-bucket")) {
            storage.put(KEY, new byte[] {1, 2, 3});
            assertThat(storage.get(KEY)).containsExactly(1, 2, 3);
            storage.delete(KEY);
            assertThat(stored.get()).isNull();
            failure.set(true);
            assertThatThrownBy(() -> storage.put(KEY, new byte[] {1}))
                    .isInstanceOf(ApiException.class)
                    .hasMessageNotContaining("private-test-detail");
        } finally {
            server.stop(0);
        }
    }
}
