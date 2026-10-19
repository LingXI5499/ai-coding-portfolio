package com.lingxi.evolution.controller;

import com.lingxi.evolution.pagination.PageResult;
import com.lingxi.evolution.query.PageQuery;
import com.lingxi.evolution.service.FileService;
import com.lingxi.evolution.vo.ApiResponse;
import com.lingxi.evolution.vo.UploadedFileVO;

import jakarta.validation.Valid;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/** 受保护的文件 API：所有者取自签名后的认证主体，不接受请求中的 userId。 */
@RestController
@RequestMapping("/api/files")
public class FileController {
    private final FileService files;

    public FileController(FileService files) {
        this.files = files;
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ApiResponse<UploadedFileVO>> upload(
            @AuthenticationPrincipal Jwt jwt, @RequestPart("file") MultipartFile file) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.ok(files.upload(Long.parseLong(jwt.getSubject()), file)));
    }

    @GetMapping
    public ApiResponse<PageResult<UploadedFileVO>> list(
            @AuthenticationPrincipal Jwt jwt, @Valid @ModelAttribute PageQuery query) {
        return ApiResponse.ok(files.list(Long.parseLong(jwt.getSubject()), query));
    }

    @GetMapping("/{id}/content")
    public ResponseEntity<byte[]> content(@AuthenticationPrincipal Jwt jwt, @PathVariable long id) {
        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_PNG)
                .header(HttpHeaders.CACHE_CONTROL, "no-store")
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=learning-image.png")
                .header("X-Content-Type-Options", "nosniff")
                .body(files.content(Long.parseLong(jwt.getSubject()), id));
    }
}
