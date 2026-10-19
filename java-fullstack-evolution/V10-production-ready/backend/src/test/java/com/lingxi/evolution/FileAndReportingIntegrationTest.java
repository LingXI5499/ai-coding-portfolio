package com.lingxi.evolution;

import static org.assertj.core.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lingxi.evolution.service.FileService;
import com.lingxi.evolution.storage.AssetStorage;
import com.lingxi.evolution.storage.ImageNormalizer;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionTemplate;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.UUID;

import javax.imageio.ImageIO;

/** 在真实安全过滤链、SQL、文件适配器与 Flyway 下验证新业务，兼容 H2 和 CI MySQL。 */
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
@Transactional
class FileAndReportingIntegrationTest {
    @TempDir static Path uploads;

    @DynamicPropertySource
    static void storage(DynamicPropertyRegistry registry) {
        registry.add("FILES_LOCAL_ROOT", () -> uploads.toString());
    }

    @Autowired MockMvc mvc;
    @Autowired ObjectMapper json;
    @Autowired JdbcTemplate jdbc;
    @Autowired FileService files;
    @Autowired AssetStorage storage;
    @Autowired PlatformTransactionManager transactions;
    TestBrowser browser;
    long owner;
    String username;

    @BeforeEach
    void login() throws Exception {
        username = "f_" + UUID.randomUUID().toString().replace("-", "").substring(0, 12);
        browser = new TestBrowser(mvc, json);
        browser.csrf();
        owner = browser.id(username);
        assertThat(browser.login(username).getResponse().getStatus()).isEqualTo(200);
    }

    static MockMultipartFile image() throws Exception {
        var bytes = new ByteArrayOutputStream();
        ImageIO.write(new BufferedImage(3, 2, BufferedImage.TYPE_INT_RGB), "png", bytes);
        return new MockMultipartFile("file", "../../课堂图片.png", "image/png", bytes.toByteArray());
    }

    private void administrator() throws Exception {
        jdbc.update("UPDATE app_user SET role='ADMIN' WHERE id=?", owner);
        browser.login(username);
    }

    @Test
    void uploadListAndOwnedDownloadUsePrivateMetadataAndActualImageBytes() throws Exception {
        var result = browser.send(multipart("/api/files").file(image()), false);
        assertThat(result.getResponse().getStatus()).isEqualTo(201);
        var data = browser.data(result);
        assertThat(data.path("originalName").asText()).isEqualTo("课堂图片.png");
        assertThat(data.path("sha256").asText()).hasSize(64);
        assertThat(data.has("objectKey")).isFalse();
        var download =
                browser.send(get("/api/files/{id}/content", data.path("id").asLong()), false);
        assertThat(download.getResponse().getStatus()).isEqualTo(200);
        assertThat(download.getResponse().getContentType()).isEqualTo("image/png");
        assertThat(download.getResponse().getHeader("Cache-Control")).isEqualTo("no-store");
        var listed = browser.data(browser.send(get("/api/files").param("pageSize", "1"), false));
        assertThat(listed.path("total").asLong()).isEqualTo(1);
        assertThat(listed.path("records").size()).isEqualTo(1);
        assertThat(
                        jdbc.queryForObject(
                                "SELECT COUNT(*) FROM audit_event WHERE user_id=? AND"
                                    + " action='FILE_UPLOADED'",
                                Long.class,
                                owner))
                .isEqualTo(1L);
    }

    @Test
    void anonymousAndOtherAccountCannotReadOrListAnotherOwnersFiles() throws Exception {
        long fileId = files.upload(owner, image()).id();
        assertThat(
                        mvc.perform(get("/api/files/{id}/content", fileId))
                                .andReturn()
                                .getResponse()
                                .getStatus())
                .isEqualTo(401);
        var other = new TestBrowser(mvc, json);
        other.csrf();
        other.register(username + "b");
        other.login(username + "b");
        assertThat(
                        other.send(get("/api/files/{id}/content", fileId), false)
                                .getResponse()
                                .getStatus())
                .isEqualTo(404);
        assertThat(
                        other.data(
                                        other.send(
                                                get("/api/files")
                                                        .param("ownerId", Long.toString(owner)),
                                                false))
                                .path("total")
                                .asLong())
                .isZero();
    }

    @Test
    void invalidImagesMultipartAndPageParametersAreRejected() throws Exception {
        for (MockMultipartFile invalid :
                new MockMultipartFile[] {
                    new MockMultipartFile(
                            "file", "fake.png", "image/png", "not an image".getBytes()),
                    new MockMultipartFile(
                            "file", "script.svg", "image/svg+xml", "<svg/>".getBytes()),
                    new MockMultipartFile("file", "empty.png", "image/png", new byte[0])
                }) {
            assertThat(
                            browser.send(multipart("/api/files").file(invalid), false)
                                    .getResponse()
                                    .getStatus())
                    .isEqualTo(400);
        }
        var large =
                new MockMultipartFile(
                        "file", "large.png", "image/png", new byte[ImageNormalizer.MAX_BYTES + 1]);
        assertThat(
                        browser.send(multipart("/api/files").file(large), false)
                                .getResponse()
                                .getStatus())
                .isEqualTo(413);
        assertThat(browser.send(multipart("/api/files"), false).getResponse().getStatus())
                .isEqualTo(400);
        assertThat(
                        browser.send(get("/api/files").param("page", "0"), false)
                                .getResponse()
                                .getStatus())
                .isEqualTo(400);
        assertThat(
                        jdbc.queryForObject(
                                "SELECT COUNT(*) FROM uploaded_file WHERE user_id=?",
                                Long.class,
                                owner))
                .isZero();
    }

    @Test
    void quotaAndIntegrityAreEnforced() throws Exception {
        long firstId = files.upload(owner, image()).id();
        String key =
                jdbc.queryForObject(
                        "SELECT object_key FROM uploaded_file WHERE id=?", String.class, firstId);
        storage.put(key, new byte[] {1, 2, 3});
        assertThat(
                        browser.send(get("/api/files/{id}/content", firstId), false)
                                .getResponse()
                                .getStatus())
                .isEqualTo(503);
        for (int i = 1; i < 20; i++) {
            files.upload(owner, image());
        }
        assertThat(
                        browser.send(multipart("/api/files").file(image()), false)
                                .getResponse()
                                .getStatus())
                .isEqualTo(409);
    }

    @Test
    void reportsRequireAdminAndReturnSevenDaysAndJoinedAuditPage() throws Exception {
        assertThat(browser.send(get("/api/admin/dashboard"), false).getResponse().getStatus())
                .isEqualTo(403);
        assertThat(browser.send(get("/api/admin/audit-events"), false).getResponse().getStatus())
                .isEqualTo(403);
        administrator();
        files.upload(owner, image());
        var dashboardResponse = browser.send(get("/api/admin/dashboard"), false);
        assertThat(dashboardResponse.getResponse().getStatus()).isEqualTo(200);
        var dashboard = browser.data(dashboardResponse);
        assertThat(dashboard.path("totalUsers").asLong()).isPositive();
        assertThat(dashboard.path("activityDays").size()).isEqualTo(7);
        var response =
                browser.send(
                        get("/api/admin/audit-events")
                                .param("keyword", username)
                                .param("action", "FILE_UPLOADED")
                                .param("pageSize", "1"),
                        false);
        assertThat(response.getResponse().getStatus()).isEqualTo(200);
        var page = browser.data(response);
        assertThat(page.path("total").asLong()).isEqualTo(1);
        assertThat(page.path("records").get(0).path("username").asText()).isEqualTo(username);
        assertThat(response.getResponse().getContentAsString())
                .doesNotContain("passwordHash", "object_key", "token_hash");
        assertThat(
                        browser.send(
                                        get("/api/admin/audit-events").param("action", "invalid"),
                                        false)
                                .getResponse()
                                .getStatus())
                .isEqualTo(400);
        assertThat(
                        browser.data(
                                        browser.send(
                                                get("/api/admin/audit-events")
                                                        .param("keyword", "%' OR 1=1 --"),
                                                false))
                                .path("total")
                                .asLong())
                .isZero();
    }

    @Test
    void rollbackCompensatesStoredObjectAndMetadata() throws Exception {
        var template = new TransactionTemplate(transactions);
        template.setPropagationBehavior(
                org.springframework.transaction.TransactionDefinition.PROPAGATION_REQUIRES_NEW);
        String isolated =
                "rollback_" + UUID.randomUUID().toString().replace("-", "").substring(0, 10);
        Long committedOwner =
                template.execute(
                        status -> {
                            jdbc.update(
                                    "INSERT INTO app_user(username,password_hash,nickname)"
                                        + " VALUES(?,?,?)",
                                    isolated,
                                    "unused",
                                    "回滚测试");
                            return jdbc.queryForObject(
                                    "SELECT id FROM app_user WHERE username=?",
                                    Long.class,
                                    isolated);
                        });
        String[] key = new String[1];
        try {
            template.executeWithoutResult(
                    status -> {
                        try {
                            long id = files.upload(committedOwner, image()).id();
                            key[0] =
                                    jdbc.queryForObject(
                                            "SELECT object_key FROM uploaded_file WHERE id=?",
                                            String.class,
                                            id);
                            assertThat(Files.exists(uploads.resolve(key[0]))).isTrue();
                            status.setRollbackOnly();
                        } catch (Exception error) {
                            throw new IllegalStateException(error);
                        }
                    });
            assertThat(Files.exists(uploads.resolve(key[0]))).isFalse();
            assertThat(
                            jdbc.queryForObject(
                                    "SELECT COUNT(*) FROM uploaded_file WHERE user_id=?",
                                    Long.class,
                                    committedOwner))
                    .isZero();
        } finally {
            template.executeWithoutResult(
                    status -> jdbc.update("DELETE FROM app_user WHERE id=?", committedOwner));
        }
    }
}
