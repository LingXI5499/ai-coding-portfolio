package com.lingxi.evolution;

import static org.assertj.core.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lingxi.evolution.mapper.AccountMapper;

import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import java.util.UUID;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class AccountIntegrationTest {
    @Autowired MockMvc mvc;
    @Autowired ObjectMapper json;
    @Autowired AccountMapper users;
    @Autowired org.springframework.jdbc.core.JdbcTemplate jdbc;
    TestBrowser browser;
    String username;

    @BeforeEach
    void setup() throws Exception {
        browser = new TestBrowser(mvc, json);
        browser.csrf();
        username = "u_" + UUID.randomUUID().toString().replace("-", "").substring(0, 12);
    }

    @Test
    void registrationHashLoginCurrentUserAndLogout() throws Exception {
        var registration = browser.register(username);
        assertThat(registration.getResponse().getStatus()).isEqualTo(201);
        assertThat(registration.getResponse().getContentAsString())
                .doesNotContain("passwordHash", "password_hash", "classroom-password");
        assertThat(users.findByUsername(username).getPasswordHash())
                .startsWith("$2a$12$")
                .isNotEqualTo("classroom-password-123");
        assertThat(browser.send(get("/api/auth/me"), false).getResponse().getStatus())
                .isEqualTo(401);
        assertThat(browser.login(username, "wrong-password").getResponse().getStatus())
                .isEqualTo(401);
        String before = browser.session.getId();
        assertThat(browser.login(username).getResponse().getStatus()).isEqualTo(200);
        assertThat(browser.session.getId()).isNotEqualTo(before);
        assertThat(browser.send(get("/api/auth/me"), false).getResponse().getStatus())
                .isEqualTo(200);
        assertThat(browser.send(post("/api/auth/logout"), true).getResponse().getStatus())
                .isEqualTo(200);
        browser.access = null;
        assertThat(browser.send(get("/api/auth/me"), false).getResponse().getStatus())
                .isEqualTo(401);
    }

    @Test
    void duplicateUsernameAndInvalidInputAreRejected() throws Exception {
        browser.register(username);
        assertThat(browser.register(username).getResponse().getStatus()).isEqualTo(409);
        assertThat(
                        browser.send(
                                        post("/api/auth/register")
                                                .contentType("application/json")
                                                .content("{}"),
                                        true)
                                .getResponse()
                                .getStatus())
                .isEqualTo(400);
        String longPassword = "汉".repeat(30);
        var body =
                json.writeValueAsString(
                        java.util.Map.of(
                                "username",
                                username + "x",
                                "password",
                                longPassword,
                                "nickname",
                                "学习者"));
        assertThat(
                        browser.send(
                                        post("/api/auth/register")
                                                .contentType("application/json")
                                                .content(body),
                                        true)
                                .getResponse()
                                .getStatus())
                .isEqualTo(400);
    }

    @Test
    void missingAndForgedCsrfAreRejected() throws Exception {
        assertThat(
                        browser.send(
                                        post("/api/auth/login")
                                                .contentType("application/json")
                                                .content("{}"),
                                        false)
                                .getResponse()
                                .getStatus())
                .isEqualTo(403);
        browser.csrf = "forged";
        assertThat(browser.register(username).getResponse().getStatus()).isEqualTo(403);
    }

    @Test
    void disabledUserCannotAuthenticate() throws Exception {
        long id = browser.id(username);
        users.status(id, "DISABLED");
        assertThat(browser.login(username).getResponse().getStatus()).isEqualTo(401);
    }

    @Test
    void passwordChangeInvalidatesExistingIdentity() throws Exception {
        browser.register(username);
        browser.login(username);
        String body =
                json.writeValueAsString(
                        java.util.Map.of(
                                "currentPassword",
                                "classroom-password-123",
                                "newPassword",
                                "new-classroom-password-456"));
        assertThat(
                        browser.send(
                                        post("/api/auth/password")
                                                .contentType("application/json")
                                                .content(body),
                                        true)
                                .getResponse()
                                .getStatus())
                .isEqualTo(200);
        assertThat(browser.send(get("/api/auth/me"), false).getResponse().getStatus())
                .isEqualTo(401);
        browser.access = null;
        browser.csrf();
        assertThat(browser.login(username, "classroom-password-123").getResponse().getStatus())
                .isEqualTo(401);
        assertThat(browser.login(username, "new-classroom-password-456").getResponse().getStatus())
                .isEqualTo(200);
    }

    @Test
    void loginAttemptsAreLimited() throws Exception {
        browser.register(username);
        for (int i = 0; i < 5; i++) {
            assertThat(browser.login(username, "wrong-password").getResponse().getStatus())
                    .isEqualTo(401);
        }
        assertThat(browser.login(username).getResponse().getStatus()).isEqualTo(429);
    }

    @Test
    void userCannotReadAdminDataAndAdminCan() throws Exception {
        browser.register(username);
        browser.login(username);
        assertThat(browser.send(get("/api/admin/users"), false).getResponse().getStatus())
                .isEqualTo(403);
        jdbc.update("UPDATE app_user SET role='ADMIN' WHERE username=?", username);
        browser.access = null;
        browser.csrf();
        browser.login(username);
        assertThat(browser.send(get("/api/admin/users"), false).getResponse().getStatus())
                .isEqualTo(200);
    }
}
