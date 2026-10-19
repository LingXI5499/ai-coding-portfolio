package com.lingxi.evolution.storage;

import com.lingxi.evolution.exception.ApiException;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Set;

import javax.imageio.ImageIO;
import javax.imageio.stream.MemoryCacheImageInputStream;

/** 验证真实图片并重新编码，去掉原文件元数据，防止仅改扩展名或压缩图片撑爆内存。 */
@Component
public class ImageNormalizer {
    public static final int MAX_BYTES = 2 * 1024 * 1024;
    private static final long MAX_PIXELS = 4_000_000L;

    public record Image(String originalName, byte[] bytes) {}

    public Image normalize(MultipartFile file) {
        if (file.isEmpty()) {
            throw invalid();
        }
        if (file.getSize() > MAX_BYTES) {
            throw tooLarge();
        }
        if (file.getContentType() == null
                || !Set.of("image/png", "image/jpeg").contains(file.getContentType())) {
            throw invalid();
        }
        try (var input = file.getInputStream()) {
            byte[] source = input.readNBytes(MAX_BYTES + 1);
            if (source.length > MAX_BYTES) {
                throw tooLarge();
            }
            try (var imageInput =
                    new MemoryCacheImageInputStream(new ByteArrayInputStream(source))) {
                var readers = ImageIO.getImageReaders(imageInput);
                if (!readers.hasNext()) {
                    throw invalid();
                }
                var reader = readers.next();
                try {
                    reader.setInput(imageInput);
                    String format = reader.getFormatName();
                    boolean png = "png".equalsIgnoreCase(format);
                    boolean jpeg =
                            "jpeg".equalsIgnoreCase(format) || "jpg".equalsIgnoreCase(format);
                    if ((!png && !jpeg)
                            || (png && !"image/png".equals(file.getContentType()))
                            || (jpeg && !"image/jpeg".equals(file.getContentType()))) {
                        throw invalid();
                    }
                    int width = reader.getWidth(0);
                    int height = reader.getHeight(0);
                    if (width < 1 || height < 1 || (long) width * height > MAX_PIXELS) {
                        throw invalid();
                    }
                    var image = reader.read(0);
                    var output = new ByteArrayOutputStream();
                    if (!ImageIO.write(image, "png", output)) {
                        throw invalid();
                    }
                    byte[] normalized = output.toByteArray();
                    if (normalized.length > MAX_BYTES) {
                        throw tooLarge();
                    }
                    return new Image(safeName(file.getOriginalFilename()), normalized);
                } finally {
                    reader.dispose();
                }
            }
        } catch (IOException | IllegalArgumentException error) {
            throw invalid();
        }
    }

    private String safeName(String filename) {
        String normalized = filename == null ? "image" : filename.replace('\\', '/');
        normalized =
                normalized
                        .substring(normalized.lastIndexOf('/') + 1)
                        .replaceAll("[\\p{Cntrl}\\p{Cf}]", "_")
                        .strip();
        return normalized.isEmpty()
                ? "image"
                : normalized.substring(0, Math.min(120, normalized.length()));
    }

    private ApiException invalid() {
        return new ApiException(400, "INVALID_IMAGE", "请上传有效的 PNG/JPEG 图片，最多 400 万像素");
    }

    private ApiException tooLarge() {
        return new ApiException(413, "FILE_TOO_LARGE", "上传图片及重新编码后的图片均不能超过 2 MiB");
    }
}
