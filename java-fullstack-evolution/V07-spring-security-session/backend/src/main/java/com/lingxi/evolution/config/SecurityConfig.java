package com.lingxi.evolution.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lingxi.evolution.exception.ApiException;
import com.lingxi.evolution.security.*;
import com.lingxi.evolution.service.*;
import com.lingxi.evolution.vo.*;

import org.springframework.context.annotation.*;
import org.springframework.security.authentication.*;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.*;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.intercept.AuthorizationFilter;
import org.springframework.security.web.csrf.*;

@Configuration
public class SecurityConfig {
    @org.springframework.beans.factory.annotation.Value("${COOKIE_SECURE:false}")
    private boolean cookieSecure;

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http,
            ObjectMapper json,
            AccountService accounts,
            LoginThrottle throttle,
            AuthenticationManager manager)
            throws Exception {
        var repository = new HttpSessionCsrfTokenRepository();

        http.csrf(
                        c ->
                                c.csrfTokenRepository(repository)
                                        .csrfTokenRequestHandler(
                                                new CsrfTokenRequestAttributeHandler()))
                .requestCache(c -> c.disable())
                .authorizeHttpRequests(
                        a ->
                                a.requestMatchers(
                                                "/api/auth/register",
                                                "/api/auth/login",
                                                "/api/auth/csrf",
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
                        e ->
                                e.authenticationEntryPoint(
                                                (req, res, ex) ->
                                                        SecurityJson.error(
                                                                res, json, 401, "UNAUTHENTICATED"))
                                        .accessDeniedHandler(
                                                (req, res, ex) ->
                                                        SecurityJson.error(
                                                                res, json, 403, "FORBIDDEN")));
        http.authenticationManager(manager);
        http.securityContext(c -> c.requireExplicitSave(true))
                .sessionManagement(s -> s.sessionFixation(f -> f.changeSessionId()))
                .formLogin(
                        f ->
                                f.loginProcessingUrl("/api/auth/login")
                                        .successHandler(
                                                (req, res, auth) -> {
                                                    throttle.clear("login:" + auth.getName());
                                                    SecurityJson.write(
                                                            res,
                                                            json,
                                                            200,
                                                            ApiResponse.ok(
                                                                    UserVO.from(
                                                                            accounts.active(
                                                                                    ((AccountPrincipal)
                                                                                                    auth
                                                                                                            .getPrincipal())
                                                                                            .id()))));
                                                })
                                        .failureHandler(
                                                (req, res, e) -> {
                                                    SecurityJson.error(
                                                            res,
                                                            json,
                                                            e.getCause() instanceof ApiException a
                                                                    ? a.getStatus()
                                                                    : 401,
                                                            "AUTH_FAILED");
                                                }))
                .logout(
                        l ->
                                l.logoutUrl("/api/auth/logout")
                                        .invalidateHttpSession(true)
                                        .deleteCookies("JSESSIONID")
                                        .logoutSuccessHandler(
                                                (req, res, auth) ->
                                                        SecurityJson.write(
                                                                res,
                                                                json,
                                                                200,
                                                                ApiResponse.ok(null))));
        http.addFilterBefore(new AccountStateFilter(accounts, json), AuthorizationFilter.class);
        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService(AccountService accounts) {
        return username -> {
            var user = accounts.byUsername(username);
            if (user == null) {
                throw new UsernameNotFoundException("Invalid credentials");
            }
            return AccountPrincipal.from(user);
        };
    }

    @Bean
    public AuthenticationManager authenticationManager(
            UserDetailsService users, AccountService accounts) {
        // 业务服务保留失败计数与 BCrypt 验证；框架负责上下文、会话和过滤器。
        var provider =
                new AuthenticationProvider() {
                    public Authentication authenticate(Authentication authentication)
                            throws AuthenticationException {
                        try {
                            var user =
                                    accounts.verify(
                                            authentication.getName(),
                                            String.valueOf(authentication.getCredentials()));
                            var principal = users.loadUserByUsername(user.getUsername());
                            return UsernamePasswordAuthenticationToken.authenticated(
                                    principal, null, principal.getAuthorities());
                        } catch (ApiException e) {
                            throw new BadCredentialsException("Invalid credentials", e);
                        }
                    }

                    public boolean supports(Class<?> type) {
                        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(type);
                    }
                };
        return new ProviderManager(provider);
    }
}
