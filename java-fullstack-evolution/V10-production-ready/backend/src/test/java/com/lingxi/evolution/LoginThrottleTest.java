package com.lingxi.evolution;

import static org.assertj.core.api.Assertions.*;

import com.lingxi.evolution.exception.ApiException;
import com.lingxi.evolution.service.LoginThrottle;

import org.junit.jupiter.api.Test;

import java.time.*;

class LoginThrottleTest {
    static class MutableClock extends Clock {
        Instant now = Instant.parse("2026-01-01T00:00:00Z");

        public ZoneId getZone() {
            return ZoneOffset.UTC;
        }

        public Clock withZone(ZoneId zone) {
            return this;
        }

        public Instant instant() {
            return now;
        }
    }

    @Test
    void fixedWindowExpiresAndSuccessClearsFailures() {
        var clock = new MutableClock();
        var throttle = new LoginThrottle(clock, 60);
        for (int i = 0; i < 5; i++) {
            throttle.check("user");
            throttle.failure("user");
        }
        assertThatThrownBy(() -> throttle.check("user")).isInstanceOf(ApiException.class);
        clock.now = clock.now.plusSeconds(61);
        throttle.check("user");
        throttle.failure("user");
        throttle.clear("user");
        throttle.check("user");
    }
}
