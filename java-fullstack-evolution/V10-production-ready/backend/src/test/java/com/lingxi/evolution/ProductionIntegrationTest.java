package com.lingxi.evolution;

import static org.assertj.core.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.flywaydb.core.Flyway;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import java.util.UUID;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class ProductionIntegrationTest {
    @Autowired Flyway flyway;
    @Autowired MockMvc mvc;

    @Test
    void orderedMigrationsAppliedAndRepeatIsNoop() {
        assertThat(flyway.info().applied()).hasSize(4);
        assertThat(flyway.migrate().migrationsExecuted).isZero();
    }

    @Test
    void healthAndOpenApiRespond() throws Exception {
        mvc.perform(get("/actuator/health"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("UP"));
        mvc.perform(get("/v3/api-docs"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.openapi").exists());
    }

    @Test
    void upgradeFromVersionThreeAddsFilesWithoutRemovingExistingAccounts() {
        String url =
                "jdbc:h2:mem:upgrade_"
                        + UUID.randomUUID()
                        + ";MODE=MySQL;DB_CLOSE_DELAY=-1;DATABASE_TO_LOWER=TRUE";
        var old =
                Flyway.configure()
                        .dataSource(url, "sa", "")
                        .locations("classpath:db/migration")
                        .target("3")
                        .load();
        old.migrate();
        var jdbc = new JdbcTemplate(new DriverManagerDataSource(url, "sa", ""));
        jdbc.update(
                "INSERT INTO app_user(username,password_hash,nickname) VALUES(?,?,?)",
                "upgrade_fixture",
                "unused-test-hash",
                "迁移前的账户");
        var latest =
                Flyway.configure()
                        .dataSource(url, "sa", "")
                        .locations("classpath:db/migration")
                        .load();
        assertThat(latest.migrate().migrationsExecuted).isEqualTo(1);
        assertThat(latest.info().applied()).hasSize(4);
        assertThat(
                        jdbc.queryForObject(
                                "SELECT nickname FROM app_user WHERE username=?",
                                String.class,
                                "upgrade_fixture"))
                .isEqualTo("迁移前的账户");
        assertThat(jdbc.queryForObject("SELECT COUNT(*) FROM uploaded_file", Long.class)).isZero();
    }
}
