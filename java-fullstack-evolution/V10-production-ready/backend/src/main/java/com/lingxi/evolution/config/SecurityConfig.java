package com.lingxi.evolution.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lingxi.evolution.security.AccountStateFilter;
import com.lingxi.evolution.security.SecurityJson;
import com.lingxi.evolution.service.AccountService;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.intercept.AuthorizationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfTokenRequestAttributeHandler;

import java.util.List;

/** Cookie 凭据端点与 Bearer API 分开匹配，避免框架的 Bearer CSRF 豁免影响刷新接口。 */
@Configuration
public class SecurityConfig {
    @Value("${COOKIE_SECURE:false}")
    private boolean cookieSecure;

    @Bean
    @Order(1)
    public SecurityFilterChain cookieEndpoints(HttpSecurity http, ObjectMapper json)
            throws Exception {
        var repository = new CookieCsrfTokenRepository();
        repository.setHeaderName("X-CSRF-TOKEN");
        repository.setCookieCustomizer(
                cookie -> cookie.httpOnly(true).sameSite("Strict").secure(cookieSecure));
        http.securityMatcher(
                        "/api/auth/csrf",
                        "/api/auth/register",
                        "/api/auth/login",
                        "/api/auth/refresh",
                        "/api/auth/logout",
                        "/api/auth/forgot-password",
                        "/api/auth/reset-password")
                .csrf(
                        csrf ->
                                csrf.csrfTokenRepository(repository)
                                        .csrfTokenRequestHandler(
                                                new CsrfTokenRequestAttributeHandler()))
                .sessionManagement(
                        session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .requestCache(cache -> cache.disable())
                .logout(logout -> logout.disable())
                .authorizeHttpRequests(auth -> auth.anyRequest().permitAll())
                .exceptionHandling(
                        errors ->
                                errors.authenticationEntryPoint(
                                                (request, response, error) ->
                                                        SecurityJson.error(
                                                                response,
                                                                json,
                                                                401,
                                                                "UNAUTHENTICATED"))
                                        .accessDeniedHandler(
                                                (request, response, error) ->
                                                        SecurityJson.error(
                                                                response,
                                                                json,
                                                                403,
                                                                "CSRF_INVALID")));
        return http.build();
    }

    @Bean
    @Order(2)
    public SecurityFilterChain bearerApi(
            HttpSecurity http, ObjectMapper json, AccountService accounts) throws Exception {
        var converter = new JwtAuthenticationConverter();
        converter.setJwtGrantedAuthoritiesConverter(
                jwt -> List.of(new SimpleGrantedAuthority("ROLE_" + jwt.getClaimAsString("role"))));
        // 此链只接受 Authorization 头，不从 Cookie 恢复身份；Cookie 端点全部由上一条链处理。
        http.csrf(csrf -> csrf.disable())
                .sessionManagement(
                        session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .requestCache(cache -> cache.disable())
                .logout(logout -> logout.disable())
                .authorizeHttpRequests(
                        auth ->
                                auth.requestMatchers(
                                                "/actuator/health",
                                                "/v3/api-docs/**",
                                                "/swagger-ui/**",
                                                "/swagger-ui.html")
                                        .permitAll()
                                        .requestMatchers("/api/admin/**")
                                        .hasRole("ADMIN")
                                        .requestMatchers("/api/**")
                                        .authenticated()
                                        .anyRequest()
                                        .permitAll())
                .exceptionHandling(
                        errors ->
                                errors.authenticationEntryPoint(
                                                (request, response, error) ->
                                                        SecurityJson.error(
                                                                response,
                                                                json,
                                                                401,
                                                                "UNAUTHENTICATED"))
                                        .accessDeniedHandler(
                                                (request, response, error) ->
                                                        SecurityJson.error(
                                                                response, json, 403, "FORBIDDEN")))
                .oauth2ResourceServer(
                        resource ->
                                resource.jwt(jwt -> jwt.jwtAuthenticationConverter(converter))
                                        .authenticationEntryPoint(
                                                (request, response, error) ->
                                                        SecurityJson.error(
                                                                response,
                                                                json,
                                                                401,
                                                                "INVALID_TOKEN")));
        http.addFilterBefore(new AccountStateFilter(accounts, json), AuthorizationFilter.class);
        return http.build();
    }
}
