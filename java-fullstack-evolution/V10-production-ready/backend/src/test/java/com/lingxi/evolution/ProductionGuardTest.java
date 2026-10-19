package com.lingxi.evolution;

import static org.assertj.core.api.Assertions.*;

import com.lingxi.evolution.config.ProductionGuard;

import org.junit.jupiter.api.Test;
import org.springframework.mock.env.MockEnvironment;

class ProductionGuardTest {
    @Test
    void missingSecureCookiesOrSecretsFailClosed() {
        var env = new MockEnvironment();
        var guard = new ProductionGuard();
        assertThatThrownBy(() -> guard.productionRequirements(env).afterPropertiesSet())
                .isInstanceOf(IllegalStateException.class);
        env.withProperty("COOKIE_SECURE", "true")
                .withProperty("DB_URL", "jdbc:mysql://localhost/test");
        assertThatThrownBy(() -> guard.productionRequirements(env).afterPropertiesSet())
                .isInstanceOf(IllegalStateException.class);
    }
}
