-- user_id 是逻辑关联。账户行锁与写入前校验由 FileService 执行。
CREATE TABLE uploaded_file (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    object_key VARCHAR(80) NOT NULL,
    original_name VARCHAR(120) NOT NULL,
    content_type VARCHAR(40) NOT NULL,
    size BIGINT NOT NULL,
    sha256 VARCHAR(64) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uk_uploaded_object UNIQUE(object_key),
    INDEX idx_uploaded_owner (user_id, id)
);
