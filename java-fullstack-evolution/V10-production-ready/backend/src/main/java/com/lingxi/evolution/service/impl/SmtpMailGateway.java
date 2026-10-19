package com.lingxi.evolution.service.impl;

import com.lingxi.evolution.service.MailGateway;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
@Profile("prod")
public class SmtpMailGateway implements MailGateway {
    private final JavaMailSender sender;
    private final String from;

    public SmtpMailGateway(JavaMailSender sender, @Value("${MAIL_FROM}") String from) {
        this.sender = sender;
        this.from = from;
    }

    public void sendReset(String email, String token) {
        var message = new SimpleMailMessage();
        message.setFrom(from);
        message.setTo(email);
        message.setSubject("账户密码重置");
        message.setText("重置令牌（15 分钟内有效，仅限一次）：" + token + "\n如果并非你本人操作，请忽略。");
        sender.send(message);
    }
}
