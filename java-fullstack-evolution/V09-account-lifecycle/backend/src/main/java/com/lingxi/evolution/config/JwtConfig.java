package com.lingxi.evolution.config;

import com.lingxi.evolution.security.TokenSecrets;
import com.nimbusds.jose.jwk.source.ImmutableSecret;

import org.springframework.context.annotation.*;
import org.springframework.core.env.Environment;
import org.springframework.security.oauth2.core.*;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.*;

import java.time.Clock;
import java.time.Duration;
import java.util.*;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

@Configuration
public class JwtConfig {
    public static final String ISSUER = "evolution-v09";

    @Bean
    public SecretKey jwtKey(Environment env) {
        String value = env.getProperty("JWT_SECRET");
        if (value == null || value.isBlank()) {
            if (Arrays.asList(env.getActiveProfiles()).contains("prod")) {
                throw new IllegalStateException("Production requires JWT_SECRET");
            }
            value = TokenSecrets.random();
        }
        byte[] bytes;
        try {
            bytes = Base64.getUrlDecoder().decode(value);
        } catch (IllegalArgumentException e) {
            bytes = Base64.getDecoder().decode(value);
        }
        if (bytes.length < 32) {
            throw new IllegalStateException("JWT_SECRET needs at least 32 random bytes");
        }
        return new SecretKeySpec(bytes, "HmacSHA256");
    }

    @Bean
    public JwtEncoder jwtEncoder(SecretKey key) {
        return new NimbusJwtEncoder(new ImmutableSecret<>(key));
    }

    @Bean
    public JwtDecoder jwtDecoder(SecretKey key, Clock clock) {
        var decoder = NimbusJwtDecoder.withSecretKey(key).macAlgorithm(MacAlgorithm.HS256).build();
        var timestamp = new JwtTimestampValidator(Duration.ZERO);
        timestamp.setClock(clock);
        OAuth2TokenValidator<Jwt> claims =
                jwt -> {
                    Object role = jwt.getClaims().get("role");
                    Object version = jwt.getClaims().get("ver");
                    boolean valid =
                            jwt.getAudience() != null
                                    && jwt.getAudience().contains("evolution-api")
                                    && jwt.getExpiresAt() != null
                                    && jwt.getSubject() != null
                                    && jwt.getSubject().matches("[1-9][0-9]{0,17}")
                                    && version instanceof Number number
                                    && number.longValue() >= 0
                                    && number.longValue() <= Integer.MAX_VALUE
                                    && role instanceof String roleName
                                    && Set.of("USER", "ADMIN").contains(roleName);
                    return valid
                            ? OAuth2TokenValidatorResult.success()
                            : OAuth2TokenValidatorResult.failure(new OAuth2Error("invalid_token"));
                };
        decoder.setJwtValidator(
                new DelegatingOAuth2TokenValidator<>(
                        timestamp, new JwtIssuerValidator(ISSUER), claims));
        return decoder;
    }
}
