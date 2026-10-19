package com.lingxi.evolution.service;

import com.lingxi.evolution.exception.ApiException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.Clock;
import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

/** 单实例内存限流；容量有界，窗口内达到阈值后拒绝，不延长锁定时间。 */
@Component
public class LoginThrottle {
    private record Window(int count, Instant until) {}

    private final Map<String, Window> windows = new HashMap<>();
    private final Clock clock;
    private final long seconds;

    public LoginThrottle(Clock clock, @Value("${security.throttle-seconds:60}") long seconds) {
        this.clock = clock;
        this.seconds = seconds;
    }

    public synchronized void check(String key) {
        var w = windows.get(key);
        if (w != null && clock.instant().isBefore(w.until()) && w.count() >= 5) {
            throw new ApiException(429, "RATE_LIMITED", "尝试过于频繁，请稍后重试");
        }
    }

    public synchronized void failure(String key) {
        var now = clock.instant();
        windows.entrySet().removeIf(e -> !now.isBefore(e.getValue().until()));
        if (windows.size() >= 10000 && !windows.containsKey(key)) {
            throw new ApiException(429, "RATE_LIMITED", "请求过多，请稍后重试");
        }
        var w = windows.get(key);
        windows.put(
                key,
                new Window(
                        w == null ? 1 : w.count() + 1,
                        w == null ? now.plusSeconds(seconds) : w.until()));
    }

    public synchronized void clear(String key) {
        windows.remove(key);
    }
}
