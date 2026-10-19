package com.lingxi.evolution.config;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.context.annotation.*;
import org.springframework.core.env.Environment;

@Configuration
@Profile("prod")
public class ProductionGuard {
    @Bean
    public InitializingBean productionRequirements(Environment env) {
        return () -> {
            if (!"true".equals(env.getProperty("COOKIE_SECURE"))) {
                throw new IllegalStateException("Production requires COOKIE_SECURE=true");
            }
            String url = env.getProperty("DB_URL", "");
            if (!url.startsWith("jdbc:mysql:")) {
                throw new IllegalStateException("Production requires explicit MySQL DB_URL");
            }
            for (String name :
                    new String[] {
                        "DB_USERNAME",
                        "DB_PASSWORD",
                        "JWT_SECRET",
                        "MAIL_HOST",
                        "MAIL_USERNAME",
                        "MAIL_PASSWORD",
                        "MAIL_FROM"
                    }) {
                if (env.getProperty(name, "").isBlank()) {
                    throw new IllegalStateException("Production requires " + name);
                }
            }
        };
    }
}
