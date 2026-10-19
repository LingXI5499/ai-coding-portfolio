package com.lingxi.evolution.config;

import org.springframework.context.annotation.*;

import java.time.Clock;

@Configuration
public class TimeConfig {
    @Bean
    public Clock clock() {
        return Clock.systemUTC();
    }
}
