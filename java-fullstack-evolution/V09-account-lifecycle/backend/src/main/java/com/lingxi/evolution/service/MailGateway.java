package com.lingxi.evolution.service;

/** 发送失败须抛出异常，由上层撤销重置令牌；禁止写入普通日志。 */
public interface MailGateway {
    void sendReset(String email, String token);
}
