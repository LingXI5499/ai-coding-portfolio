package com.lingxi.evolution;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lingxi.evolution.exception.ApiException;
import com.lingxi.evolution.mapper.*;
import com.lingxi.evolution.security.TokenSecrets;
import com.lingxi.evolution.service.*;

import org.junit.jupiter.api.*;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import java.time.*;
import java.util.*;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class LifecycleIntegrationTest {
    @Autowired MockMvc mvc;
    @Autowired ObjectMapper json;
    @Autowired AccountMapper users;
    @Autowired TokenMapper tokens;
    @Autowired LifecycleMapper lifecycle;
    @Autowired PasswordResetService resets;
    @Autowired JdbcTemplate jdbc;
    @Autowired Clock clock;
    @MockBean MailGateway mail;
    TestBrowser browser;
    String username;
    long id;

    @BeforeEach
    void setup() throws Exception {
        browser = new TestBrowser(mvc, json);
        browser.csrf();
        username = "l_" + UUID.randomUUID().toString().replace("-", "").substring(0, 12);
        id = browser.id(username);
        browser.login(username);
    }

    @Test
    void profileIsAlwaysCurrentUserAndInjectedIdRejected() throws Exception {
        String other = username + "x";
        long otherId = browser.id(other);
        String body =
                json.writeValueAsString(
                        Map.of("nickname", "新昵称", "email", "learner@example.invalid"));
        assertThat(
                        browser.send(
                                        put("/api/account/profile")
                                                .contentType("application/json")
                                                .content(body),
                                        true)
                                .getResponse()
                                .getStatus())
                .isEqualTo(200);
        assertThat(users.findById(id).getNickname()).isEqualTo("新昵称");
        assertThat(users.findById(otherId).getNickname()).isEqualTo("学习者");
        assertThat(
                        browser.send(
                                        put("/api/account/profile/" + otherId)
                                                .contentType("application/json")
                                                .content(body),
                                        true)
                                .getResponse()
                                .getStatus())
                .isEqualTo(404);
        assertThat(
                        browser.send(
                                        put("/api/account/profile")
                                                .contentType("application/json")
                                                .content(
                                                        body.replace(
                                                                "{", "{\"id\":" + otherId + ",")),
                                        true)
                                .getResponse()
                                .getStatus())
                .isEqualTo(400);
    }

    @Test
    void resetIsOneUseAndRevokesOldCredentials() throws Exception {
        resets.request(username, username);
        var token = ArgumentCaptor.forClass(String.class);
        verify(mail).sendReset(eq(username + "@example.invalid"), token.capture());
        resets.reset(token.getValue(), "new-classroom-password-456", username);
        assertThatThrownBy(
                        () ->
                                resets.reset(
                                        token.getValue(), "another-classroom-password", username))
                .isInstanceOf(ApiException.class);
        assertThat(browser.send(get("/api/auth/me"), false).getResponse().getStatus())
                .isEqualTo(401);
        browser.access = null;
        browser.csrf();
        assertThat(browser.login(username, "new-classroom-password-456").getResponse().getStatus())
                .isEqualTo(200);
    }

    @Test
    void expiredResetAndDeliveryFailureDoNotAllowReset() {
        String raw = TokenSecrets.random();
        lifecycle.reset(
                TokenSecrets.hash(raw),
                id,
                LocalDateTime.ofInstant(clock.instant().minusSeconds(1), ZoneOffset.UTC));
        assertThatThrownBy(() -> resets.reset(raw, "new-classroom-password-456", username))
                .isInstanceOf(ApiException.class);
        doThrow(new IllegalStateException("SMTP unavailable"))
                .when(mail)
                .sendReset(anyString(), anyString());
        resets.request(username, username);
        assertThat(
                        jdbc.queryForObject(
                                "SELECT COUNT(*) FROM password_reset WHERE user_id=? AND"
                                        + " used=FALSE",
                                Integer.class,
                                id))
                .isZero();
    }

    @Test
    void unknownAccountHasSameForgotResponseAndRequestsAreLimited() throws Exception {
        var body = json.writeValueAsString(Map.of("username", username + "x"));
        assertThat(
                        browser.send(
                                        post("/api/auth/forgot-password")
                                                .contentType("application/json")
                                                .content(body),
                                        true)
                                .getResponse()
                                .getStatus())
                .isEqualTo(200);
        for (int i = 0; i < 5; i++) {
            resets.request(username, username);
        }
        assertThatThrownBy(() -> resets.request(username, username))
                .isInstanceOf(ApiException.class);
    }

    @Test
    void logoutAllRevokesBothDevicesAndSoftDeleteKeepsAudit() throws Exception {
        var second = new TestBrowser(mvc, json);
        second.csrf();
        second.login(username);
        assertThat(browser.send(post("/api/auth/logout-all"), true).getResponse().getStatus())
                .isEqualTo(200);
        assertThat(second.send(get("/api/auth/me"), false).getResponse().getStatus())
                .isEqualTo(401);
        assertThat(second.send(post("/api/auth/refresh"), true).getResponse().getStatus())
                .isEqualTo(401);
        browser.access = null;
        browser.csrf();
        browser.login(username);
        assertThat(browser.send(delete("/api/account"), true).getResponse().getStatus())
                .isEqualTo(200);
        assertThat(users.findById(id).getStatus()).isEqualTo("DELETED");
        assertThat(
                        jdbc.queryForObject(
                                "SELECT COUNT(*) FROM audit_event WHERE user_id=?",
                                Integer.class,
                                id))
                .isGreaterThan(0);
    }

    @Test
    void disableImmediatelyRejectsExistingAccessAndRestoreRequiresNewLogin() throws Exception {
        String target = username + "x";
        long targetId = browser.id(target);
        var other = new TestBrowser(mvc, json);
        other.csrf();
        other.login(target);
        jdbc.update("UPDATE app_user SET role='ADMIN' WHERE id=?", id);
        browser.login(username);
        assertThat(
                        browser.send(
                                        patch("/api/admin/users/" + targetId + "/status")
                                                .contentType("application/json")
                                                .content("{\"status\":\"DISABLED\"}"),
                                        true)
                                .getResponse()
                                .getStatus())
                .isEqualTo(200);
        assertThat(other.send(get("/api/auth/me"), false).getResponse().getStatus()).isEqualTo(401);
        assertThat(
                        browser.send(
                                        patch("/api/admin/users/" + targetId + "/status")
                                                .contentType("application/json")
                                                .content("{\"status\":\"ACTIVE\"}"),
                                        true)
                                .getResponse()
                                .getStatus())
                .isEqualTo(200);
        other.access = null;
        other.csrf();
        assertThat(other.login(target).getResponse().getStatus()).isEqualTo(200);
    }

    @Autowired AuditService audit;

    @Test
    void logicalAssociationRejectsMissingUserAndNoOrphansRemain() {
        assertThatThrownBy(() -> audit.record(999999999L, "TEST")).isInstanceOf(ApiException.class);
        assertThat(
                        jdbc.queryForObject(
                                "SELECT COUNT(*) FROM refresh_token r LEFT JOIN app_user u ON"
                                        + " u.id=r.user_id WHERE u.id IS NULL",
                                Integer.class))
                .isZero();
        assertThat(
                        jdbc.queryForObject(
                                "SELECT COUNT(*) FROM password_reset r LEFT JOIN app_user u ON"
                                        + " u.id=r.user_id WHERE u.id IS NULL",
                                Integer.class))
                .isZero();
        assertThat(
                        jdbc.queryForObject(
                                "SELECT COUNT(*) FROM audit_event a LEFT JOIN app_user u ON"
                                        + " u.id=a.user_id WHERE a.user_id IS NOT NULL AND u.id IS"
                                        + " NULL",
                                Integer.class))
                .isZero();
    }
}
