package com.lingxi.evolution.handler;

import com.lingxi.evolution.exception.ApiException;
import com.lingxi.evolution.vo.ApiResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.resource.NoResourceFoundException;

/** 错误不回显 SQL、凭据、请求体或异常消息。 */
@RestControllerAdvice
public class GlobalExceptionHandler {
    private static final Logger LOG = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(ApiException.class)
    public ResponseEntity<ApiResponse<Void>> business(ApiException e) {
        return ResponseEntity.status(e.getStatus())
                .body(ApiResponse.error(e.getCode(), e.getMessage()));
    }

    @ExceptionHandler({
        MethodArgumentNotValidException.class,
        HttpMessageNotReadableException.class,
        MethodArgumentTypeMismatchException.class
    })
    public ResponseEntity<ApiResponse<Void>> invalid(Exception e) {
        return ResponseEntity.badRequest()
                .body(ApiResponse.error("INVALID_INPUT", "请检查字段格式、长度与取值范围"));
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ApiResponse<Void>> conflict(Exception e) {
        return ResponseEntity.status(409).body(ApiResponse.error("CONFLICT", "数据冲突，请检查唯一字段"));
    }

    @ExceptionHandler(NoResourceFoundException.class)
    public ResponseEntity<ApiResponse<Void>> missing(Exception e) {
        return ResponseEntity.status(404).body(ApiResponse.error("NOT_FOUND", "资源不存在"));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse<Void>> unexpected(Exception e) {
        var body = ApiResponse.error("INTERNAL_ERROR", "服务暂时不可用，请提供 traceId 联系维护者");
        LOG.error(
                "Request failed traceId={} exceptionType={}",
                body.traceId(),
                e.getClass().getName());
        return ResponseEntity.internalServerError().body(body);
    }
}
