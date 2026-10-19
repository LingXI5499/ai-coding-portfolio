package com.lingxi.evolution.aspect;

import com.lingxi.evolution.annotation.ObservedOperation;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

/** AOP 处理横切的耗时日志；身份认证仍由 SecurityFilterChain 负责。 */
@Aspect
@Component
public class OperationTimingAspect {
    private static final Logger LOG = LoggerFactory.getLogger(OperationTimingAspect.class);

    @Around("@annotation(operation)")
    public Object measure(ProceedingJoinPoint call, ObservedOperation operation) throws Throwable {
        long started = System.nanoTime();
        boolean succeeded = false;
        try {
            Object result = call.proceed();
            succeeded = true;
            return result;
        } finally {
            // 不序列化参数、返回值和异常消息，避免把密码、文件或令牌写入日志。
            LOG.info(
                    "operation={} succeeded={} durationMs={}",
                    operation.value(),
                    succeeded,
                    TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - started));
        }
    }
}
