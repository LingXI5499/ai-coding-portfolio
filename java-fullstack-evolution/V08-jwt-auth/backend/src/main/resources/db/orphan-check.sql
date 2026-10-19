-- 只读孤儿排查：结果应为空。服务层写入前检查用户存在；不物理删除用户。
SELECT r.token_hash, r.user_id FROM refresh_token r
LEFT JOIN app_user u ON u.id=r.user_id WHERE u.id IS NULL;
