package com.lingxi.evolution;

import static org.assertj.core.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lingxi.evolution.mapper.AccountMapper;

import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
@Transactional
class AdminQueryIntegrationTest {
    @Autowired MockMvc mvc;
    @Autowired ObjectMapper json;
    @Autowired JdbcTemplate jdbc;
    @Autowired AccountMapper accounts;
    TestBrowser browser;
    String prefix;
    String hash;

    @BeforeEach
    void administrator() throws Exception {
        prefix = "q_" + UUID.randomUUID().toString().replace("-", "").substring(0, 10);
        browser = new TestBrowser(mvc, json);
        browser.csrf();
        long id = browser.id(prefix + "admin");
        jdbc.update("UPDATE app_user SET role='ADMIN' WHERE id=?", id);
        assertThat(browser.login(prefix + "admin").getResponse().getStatus()).isEqualTo(200);
        hash = accounts.findById(id).getPasswordHash();
    }

    private void user(String username, String nickname, String status, String role) {
        jdbc.update(
                "INSERT INTO app_user(username,password_hash,nickname,status,role)"
                    + " VALUES(?,?,?,?,?)",
                username,
                hash,
                nickname,
                status,
                role);
    }

    private JsonNode page(MockHttpServletRequestBuilder request) throws Exception {
        var result = browser.send(request, false);
        assertThat(result.getResponse().getStatus()).isEqualTo(200);
        assertThat(result.getResponse().getContentAsString())
                .doesNotContain("passwordHash", "password_hash", "$2a$");
        return browser.data(result);
    }

    @Test
    void nicknameOrUsernameIsGroupedBeforeStatusAndRoleFilters() throws Exception {
        user(prefix + "target", "目标昵称", "ACTIVE", "USER");
        user("other_" + prefix, prefix + "昵称匹配", "ACTIVE", "ADMIN");
        user(prefix + "disabled", prefix + "禁用", "DISABLED", "USER");
        var data =
                page(
                        get("/api/admin/users")
                                .param("keyword", prefix)
                                .param("status", "ACTIVE")
                                .param("role", "USER")
                                .param("pageSize", "1"));
        assertThat(data.path("total").asLong()).isEqualTo(1);
        assertThat(data.path("records").get(0).path("username").asText())
                .isEqualTo(prefix + "target");
        var nickname =
                page(
                        get("/api/admin/users")
                                .param("keyword", prefix + "昵称")
                                .param("role", "ADMIN"));
        assertThat(nickname.path("total").asLong()).isEqualTo(1);
    }

    @Test
    void moreThan200UsersCanBeReachedWithStablePageMetadata() throws Exception {
        List<Object[]> rows = new ArrayList<>();
        for (int i = 0; i < 205; i++) {
            rows.add(new Object[] {prefix + "batch" + i, hash, "分页学员"});
        }
        jdbc.batchUpdate(
                "INSERT INTO app_user(username,password_hash,nickname) VALUES(?,?,?)", rows);
        var first = page(get("/api/admin/users").param("keyword", prefix + "batch"));
        assertThat(first.path("total").asLong()).isEqualTo(205);
        assertThat(first.path("records").size()).isEqualTo(10);
        var last =
                page(
                        get("/api/admin/users")
                                .param("keyword", prefix + "batch")
                                .param("pageSize", "100")
                                .param("page", "3"));
        assertThat(last.path("totalPages").asLong()).isEqualTo(3);
        assertThat(last.path("records").size()).isEqualTo(5);
    }

    @Test
    void noMatchesAndOutOfRangePageReturnEmptyRecords() throws Exception {
        var empty = page(get("/api/admin/users").param("keyword", prefix + "absent"));
        assertThat(empty.path("total").asLong()).isZero();
        assertThat(empty.path("totalPages").asLong()).isZero();
        assertThat(empty.path("records").isEmpty()).isTrue();
        var beyond = page(get("/api/admin/users").param("keyword", prefix).param("page", "999999"));
        assertThat(beyond.path("records").isEmpty()).isTrue();
        assertThat(beyond.path("total").asLong()).isEqualTo(1);
    }

    @Test
    void literalWildcardsAndInjectionCannotWidenResults() throws Exception {
        user(prefix + "literal", prefix + "%_!", "ACTIVE", "USER");
        assertThat(page(get("/api/admin/users").param("keyword", "%_!")).path("total").asLong())
                .isEqualTo(1);
        assertThat(
                        page(get("/api/admin/users").param("keyword", "%' OR 1=1 --"))
                                .path("total")
                                .asLong())
                .isZero();
    }

    @Test
    void invalidQueriesReturn400() throws Exception {
        for (String[] param :
                List.of(
                        new String[] {"page", "0"},
                        new String[] {"pageSize", "101"},
                        new String[] {"page", "abc"},
                        new String[] {"status", "unknown"},
                        new String[] {"role", "SUPER_ADMIN"},
                        new String[] {"keyword", "x".repeat(51)})) {
            assertThat(
                            browser.send(get("/api/admin/users").param(param[0], param[1]), false)
                                    .getResponse()
                                    .getStatus())
                    .isEqualTo(400);
        }
    }

    @Test
    void queryParametersDoNotBypassAuthenticationOrAdminAuthorization() throws Exception {
        mvc.perform(get("/api/admin/users").param("role", "ADMIN"))
                .andExpect(status().isUnauthorized());
        var regular = new TestBrowser(mvc, json);
        regular.csrf();
        regular.register(prefix + "regular");
        regular.login(prefix + "regular");
        assertThat(
                        regular.send(get("/api/admin/users").param("role", "ADMIN"), false)
                                .getResponse()
                                .getStatus())
                .isEqualTo(403);
    }
}
