package com.lingxi.evolution.service.impl;

import com.lingxi.evolution.service.MailGateway;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.*;
import java.nio.file.attribute.PosixFilePermissions;
import java.util.UUID;

/** 开发专用私有投递目录，不提供 HTTP 读取接口；生产 profile 不加载。 */
@Component
@Profile("!prod")
public class LocalMailGateway implements MailGateway {
    public void sendReset(String email, String token) {
        try {
            var dir = Path.of(".local-mail");
            Files.createDirectories(dir);
            var path = dir.resolve(UUID.randomUUID() + ".txt");
            Files.writeString(
                    path,
                    "To: " + email + "\nReset token (15 minutes, one use): " + token,
                    StandardOpenOption.CREATE_NEW);
            if (Files.getFileStore(path).supportsFileAttributeView("posix")) {
                Files.setPosixFilePermissions(path, PosixFilePermissions.fromString("rw-------"));
            }
        } catch (IOException e) {
            throw new IllegalStateException("Local mail delivery failed");
        }
    }
}
