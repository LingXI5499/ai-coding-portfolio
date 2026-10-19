package com.lingxi.evolution;

import static org.assertj.core.api.Assertions.*;

import com.lingxi.evolution.exception.ApiException;
import com.lingxi.evolution.handler.GlobalExceptionHandler;

import org.junit.jupiter.api.Test;

class ErrorContractTest {
    private final GlobalExceptionHandler handler = new GlobalExceptionHandler();

    @Test
    void unexpectedExceptionDoesNotExposeSecrets() {
        var result =
                handler.unexpected(
                        new IllegalStateException("password=do-not-expose SQL internal"));
        assertThat(result.getStatusCode().value()).isEqualTo(500);
        assertThat(result.getBody().code()).isEqualTo("INTERNAL_ERROR");
        assertThat(result.getBody().message()).doesNotContain("password", "SQL", "internal");
        assertThat(result.getBody().traceId()).isNotBlank();
    }

    @Test
    void businessStatusIsNotFlattenedTo200() {
        var result = handler.business(new ApiException(404, "NOT_FOUND", "资源不存在"));
        assertThat(result.getStatusCode().value()).isEqualTo(404);
        assertThat(result.getBody().code()).isEqualTo("NOT_FOUND");
    }
}
