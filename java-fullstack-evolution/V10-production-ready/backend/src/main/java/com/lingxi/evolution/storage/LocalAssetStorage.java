package com.lingxi.evolution.storage;

import com.lingxi.evolution.exception.ApiException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;

/** 文件放在非公开工作目录；客户端不能提供路径，也不能通过静态资源直接访问。 */
public class LocalAssetStorage implements AssetStorage {
    private final Path root;

    public LocalAssetStorage(Path root) throws IOException {
        this.root = root.toAbsolutePath().normalize();
        Files.createDirectories(this.root);
        if (Files.isSymbolicLink(this.root)) {
            throw new IllegalArgumentException("Upload root must not be a symbolic link");
        }
    }

    private Path resolve(String key) {
        if (!key.matches("[a-f0-9-]{36}\\.png")) {
            throw new IllegalArgumentException("Invalid server object key");
        }
        Path file = root.resolve(key).normalize();
        if (!file.startsWith(root) || Files.isSymbolicLink(file)) {
            throw new IllegalArgumentException("Invalid storage path");
        }
        return file;
    }

    @Override
    public void put(String key, byte[] bytes) {
        Path target = resolve(key);
        Path temporary = null;
        try {
            temporary = Files.createTempFile(root, "upload-", ".tmp");
            Files.write(temporary, bytes);
            // 同目录重命名完成后才返回，读取方不会看到写到一半的对象。
            Files.move(temporary, target, StandardCopyOption.ATOMIC_MOVE);
        } catch (IOException error) {
            throw unavailable();
        } finally {
            if (temporary != null) {
                try {
                    Files.deleteIfExists(temporary);
                } catch (IOException error) {
                    temporary.toFile().deleteOnExit();
                }
            }
        }
    }

    @Override
    public byte[] get(String key) {
        Path file = resolve(key);
        if (!Files.isRegularFile(file, LinkOption.NOFOLLOW_LINKS)) {
            throw new ApiException(404, "FILE_NOT_FOUND", "文件不存在");
        }
        try (var input = Files.newInputStream(file, LinkOption.NOFOLLOW_LINKS)) {
            byte[] bytes = input.readNBytes(ImageNormalizer.MAX_BYTES + 1);
            if (bytes.length > ImageNormalizer.MAX_BYTES) {
                throw unavailable();
            }
            return bytes;
        } catch (IOException error) {
            throw unavailable();
        }
    }

    @Override
    public void delete(String key) {
        try {
            Files.deleteIfExists(resolve(key));
        } catch (IOException error) {
            throw unavailable();
        }
    }

    private ApiException unavailable() {
        return new ApiException(503, "STORAGE_UNAVAILABLE", "文件存储暂时不可用");
    }
}
