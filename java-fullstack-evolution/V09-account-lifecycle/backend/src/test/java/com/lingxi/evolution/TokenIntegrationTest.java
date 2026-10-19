package com.lingxi.evolution;

import static org.assertj.core.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lingxi.evolution.config.JwtConfig;
import com.lingxi.evolution.exception.ApiException;
import com.lingxi.evolution.mapper.TokenMapper;
import com.lingxi.evolution.security.TokenSecrets;
import com.lingxi.evolution.service.TokenService;

import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import java.time.*;
import java.util.*;
import java.util.concurrent.*;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class TokenIntegrationTest {
    @Autowired MockMvc mvc;
    @Autowired ObjectMapper json;
    @Autowired TokenMapper mapper;
    @Autowired TokenService tokens;
    @Autowired JwtEncoder encoder;
    @Autowired Clock clock;
    TestBrowser browser;
    String username;
    long id;

    @BeforeEach
    void setup() throws Exception {
        browser = new TestBrowser(mvc, json);
        browser.csrf();
        username = "t_" + UUID.randomUUID().toString().replace("-", "").substring(0, 12);
        id = browser.id(username);
        browser.login(username);
    }

    @Test
    void refreshRotatesAndReplayRevokesFamily() throws Exception {
        String old = browser.cookies.get("REFRESH").getValue();
        assertThat(mapper.find(TokenSecrets.hash(old))).isNotNull();
        assertThat(mapper.find(old)).isNull();
        assertThat(browser.send(post("/api/auth/refresh"), true).getResponse().getStatus())
                .isEqualTo(200);
        String next = browser.cookies.get("REFRESH").getValue();
        assertThat(next).isNotEqualTo(old);
        browser.cookies.put("REFRESH", new jakarta.servlet.http.Cookie("REFRESH", old));
        assertThat(browser.send(post("/api/auth/refresh"), true).getResponse().getStatus())
                .isEqualTo(401);
        browser.cookies.put("REFRESH", new jakarta.servlet.http.Cookie("REFRESH", next));
        assertThat(browser.send(post("/api/auth/refresh"), true).getResponse().getStatus())
                .isEqualTo(401);
    }

    @Test
    void logoutRevokesRefreshAndCsrfIsMandatory() throws Exception {
        String old = browser.cookies.get("REFRESH").getValue();
        assertThat(browser.send(post("/api/auth/refresh"), false).getResponse().getStatus())
                .isEqualTo(403);
        assertThat(browser.send(post("/api/auth/logout"), true).getResponse().getStatus())
                .isEqualTo(200);
        browser.cookies.put("REFRESH", new jakarta.servlet.http.Cookie("REFRESH", old));
        assertThat(browser.send(post("/api/auth/refresh"), true).getResponse().getStatus())
                .isEqualTo(401);
    }

    @Test
    void expiredMalformedAndTamperedJwtAreRejected() throws Exception {
        String valid = browser.access;
        String[] segments = valid.split("\\.");
        segments[2] = (segments[2].startsWith("A") ? "B" : "A") + segments[2].substring(1);
        for (String value : List.of("not-a-jwt", String.join(".", segments), expired())) {
            browser.access = value;
            assertThat(browser.send(get("/api/auth/me"), false).getResponse().getStatus())
                    .isEqualTo(401);
        }
        browser.access = valid;
        assertThat(browser.send(get("/api/auth/me"), false).getResponse().getStatus())
                .isEqualTo(200);
    }

    private String expired() {
        var now = clock.instant();
        var claims =
                JwtClaimsSet.builder()
                        .issuer(JwtConfig.ISSUER)
                        .subject(Long.toString(id))
                        .audience(List.of("evolution-api"))
                        .issuedAt(now.minusSeconds(120))
                        .expiresAt(now.minusSeconds(60))
                        .claim("ver", 0)
                        .claim("role", "USER")
                        .build();
        return encoder.encode(
                        JwtEncoderParameters.from(
                                JwsHeader.with(MacAlgorithm.HS256).build(), claims))
                .getTokenValue();
    }

    @Test
    void expiredRefreshCannotRotate() {
        String raw = TokenSecrets.random();
        var row = new com.lingxi.evolution.entity.RefreshToken();
        row.setTokenHash(TokenSecrets.hash(raw));
        row.setUserId(id);
        row.setFamilyId(UUID.randomUUID().toString());
        row.setExpiresAt(LocalDateTime.ofInstant(clock.instant().minusSeconds(10), ZoneOffset.UTC));
        mapper.insert(row);
        assertThatThrownBy(() -> tokens.refresh(raw)).isInstanceOf(ApiException.class);
    }

    @Test
    void concurrentRefreshOnlyOneWins() throws Exception {
        String raw = browser.cookies.get("REFRESH").getValue();
        var start = new CountDownLatch(1);
        var pool = Executors.newFixedThreadPool(2);
        try {
            Callable<Boolean> rotate =
                    () -> {
                        start.await();
                        try {
                            tokens.refresh(raw);
                            return true;
                        } catch (ApiException e) {
                            return false;
                        }
                    };
            var a = pool.submit(rotate);
            var b = pool.submit(rotate);
            start.countDown();
            assertThat(List.of(a.get(10, TimeUnit.SECONDS), b.get(10, TimeUnit.SECONDS)))
                    .containsExactlyInAnyOrder(true, false);
        } finally {
            pool.shutdownNow();
        }
    }

    @Test
    void missingRequiredClaimsAreRejectedWithoutServerError() throws Exception {
        var claims =
                JwtClaimsSet.builder()
                        .issuer(JwtConfig.ISSUER)
                        .subject(Long.toString(id))
                        .issuedAt(clock.instant())
                        .expiresAt(clock.instant().plusSeconds(60))
                        .build();
        browser.access =
                encoder.encode(
                                JwtEncoderParameters.from(
                                        JwsHeader.with(MacAlgorithm.HS256).build(), claims))
                        .getTokenValue();
        assertThat(browser.send(get("/api/auth/me"), false).getResponse().getStatus())
                .isEqualTo(401);
    }
}
