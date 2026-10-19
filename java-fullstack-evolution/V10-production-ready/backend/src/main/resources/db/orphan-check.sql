-- 只读孤儿排查：结果应为空。服务层写入前检查用户存在；不物理删除用户。
SELECT r.token_hash, r.user_id FROM refresh_token r
LEFT JOIN app_user u ON u.id=r.user_id WHERE u.id IS NULL;
SELECT r.token_hash, r.user_id FROM password_reset r
LEFT JOIN app_user u ON u.id=r.user_id WHERE u.id IS NULL;
SELECT a.id, a.user_id FROM audit_event a
LEFT JOIN app_user u ON u.id=a.user_id WHERE a.user_id IS NOT NULL AND u.id IS NULL;
-- 本查询应为空：上传文件的 user_id 也只做逻辑关联。
SELECT f.id FROM uploaded_file f LEFT JOIN app_user u ON u.id = f.user_id WHERE u.id IS NULL;
