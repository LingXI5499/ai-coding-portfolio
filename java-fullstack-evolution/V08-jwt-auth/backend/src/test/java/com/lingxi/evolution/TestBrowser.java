package com.lingxi.evolution;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import com.fasterxml.jackson.databind.*;

import jakarta.servlet.http.Cookie;

import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.*;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;

import java.util.*;

/** A small browser cookie/session jar; CSRF tokens come from the real endpoint. */
final class TestBrowser {
    final MockMvc mvc;
    final ObjectMapper json;
    MockHttpSession session;
    String csrf;
    String access;
    final Map<String, Cookie> cookies = new HashMap<>();

    TestBrowser(MockMvc mvc, ObjectMapper json) {
        this.mvc = mvc;
        this.json = json;
    }

    MvcResult send(MockHttpServletRequestBuilder request, boolean protect) throws Exception {
        if (session != null && !session.isInvalid()) {
            request.session(session);
        }
        if (!cookies.isEmpty()) {
            request.cookie(cookies.values().toArray(Cookie[]::new));
        }
        if (protect && csrf != null) {
            request.header("X-CSRF-TOKEN", csrf);
        }
        if (access != null) {
            request.header("Authorization", "Bearer " + access);
        }
        var result = mvc.perform(request).andReturn();
        var next = (MockHttpSession) result.getRequest().getSession(false);
        session = next != null && !next.isInvalid() ? next : null;
        for (Cookie cookie : result.getResponse().getCookies()) {
            if (cookie.getMaxAge() == 0) {
                cookies.remove(cookie.getName());
            } else {
                cookies.put(cookie.getName(), cookie);
            }
        }
        return result;
    }

    JsonNode data(MvcResult result) throws Exception {
        return json.readTree(result.getResponse().getContentAsString()).path("data");
    }

    void csrf() throws Exception {
        csrf = data(send(get("/api/auth/csrf"), false)).path("token").asText();
    }

    MvcResult register(String username) throws Exception {
        return send(
                post("/api/auth/register")
                        .contentType("application/json")
                        .content(
                                json.writeValueAsString(
                                        Map.of(
                                                "username",
                                                username,
                                                "password",
                                                "classroom-password-123",
                                                "nickname",
                                                "学习者",
                                                "email",
                                                username + "@example.invalid"))),
                true);
    }

    MvcResult login(String username, String password) throws Exception {
        var result =
                send(
                        post("/api/auth/login")
                                .contentType("application/json")
                                .content(
                                        json.writeValueAsString(
                                                Map.of(
                                                        "username",
                                                        username,
                                                        "password",
                                                        password))),
                        true);
        if (result.getResponse().getStatus() == 200) {
            access = data(result).path("accessToken").asText();
            csrf();
        }
        return result;
    }

    MvcResult login(String username) throws Exception {
        return login(username, "classroom-password-123");
    }

    long id(String username) throws Exception {
        return data(register(username)).path("id").asLong();
    }
}
