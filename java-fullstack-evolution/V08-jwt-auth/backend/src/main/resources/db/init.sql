CREATE TABLE IF NOT EXISTS app_user (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(32) NOT NULL,
    password_hash VARCHAR(100) NOT NULL,
    nickname VARCHAR(50) NOT NULL,
    email VARCHAR(254),
    status VARCHAR(16) NOT NULL DEFAULT 'ACTIVE',
    role VARCHAR(16) NOT NULL DEFAULT 'USER',
    auth_version INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uk_user_username UNIQUE(username),
    CONSTRAINT ck_user_status CHECK(status IN ('ACTIVE','DISABLED','DELETED')),
    CONSTRAINT ck_user_role CHECK(role IN ('USER','ADMIN'))
);
CREATE TABLE IF NOT EXISTS refresh_token (
    token_hash VARCHAR(64) PRIMARY KEY,
    user_id BIGINT NOT NULL,
    family_id VARCHAR(36) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    consumed BOOLEAN NOT NULL DEFAULT FALSE,
    revoked BOOLEAN NOT NULL DEFAULT FALSE,
    INDEX idx_refresh_user (user_id),
    INDEX idx_refresh_family (family_id)
);
