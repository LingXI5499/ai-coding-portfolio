package com.lingxi.evolution.storage;

/** 二进制存储边界：本地与 OSS 共用业务流程，key 只能由服务端生成。 */
public interface AssetStorage extends AutoCloseable {
    /** 保存已验证、重新编码后的图片；失败时抛出异常，由业务事务触发补偿清理。 */
    void put(String key, byte[] bytes);

    /** 读取私有对象；调用方必须先验证数据库中的所有权。 */
    byte[] get(String key);

    /** 幂等删除，仅用于失败补偿，不对外开放任意 key 删除。 */
    void delete(String key);

    @Override
    default void close() {
        // 本地实现无长期资源；OSS 实现覆盖此方法关闭连接池。
    }
}
