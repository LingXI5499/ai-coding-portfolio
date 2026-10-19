package com.lingxi.evolution.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lingxi.evolution.vo.ApiResponse;

import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public final class SecurityJson {
    private SecurityJson() {}

    public static void write(HttpServletResponse res, ObjectMapper json, int status, Object body)
            throws IOException {
        res.setStatus(status);
        res.setContentType("application/json;charset=UTF-8");
        res.setHeader("Cache-Control", "no-store");
        json.writeValue(res.getOutputStream(), body);
    }

    public static void error(HttpServletResponse res, ObjectMapper json, int status, String code)
            throws IOException {
        write(res, json, status, ApiResponse.error(code, status == 401 ? "请重新登录" : "请求被拒绝"));
    }
}
