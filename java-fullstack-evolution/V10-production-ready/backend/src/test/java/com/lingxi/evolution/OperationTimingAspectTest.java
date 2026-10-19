package com.lingxi.evolution;

import static org.assertj.core.api.Assertions.*;

import ch.qos.logback.classic.Logger;
import ch.qos.logback.classic.spi.ILoggingEvent;
import ch.qos.logback.core.read.ListAppender;

import com.lingxi.evolution.annotation.ObservedOperation;
import com.lingxi.evolution.aspect.OperationTimingAspect;

import org.junit.jupiter.api.Test;
import org.slf4j.LoggerFactory;
import org.springframework.aop.aspectj.annotation.AspectJProxyFactory;

class OperationTimingAspectTest {
    public static class Fixture {
        @ObservedOperation("TEST_OPERATION")
        public String call(String input) {
            if (input.equals("fail-private-detail")) {
                throw new IllegalStateException(input);
            }
            return input;
        }
    }

    @Test
    void observesSuccessAndFailureWithoutChangingResultsOrLoggingSensitiveValues() {
        var logger = (Logger) LoggerFactory.getLogger(OperationTimingAspect.class);
        var appender = new ListAppender<ILoggingEvent>();
        appender.start();
        logger.addAppender(appender);
        try {
            var factory = new AspectJProxyFactory(new Fixture());
            factory.addAspect(new OperationTimingAspect());
            Fixture proxy = factory.getProxy();
            assertThat(proxy.call("private-password-and-token"))
                    .isEqualTo("private-password-and-token");
            assertThatThrownBy(() -> proxy.call("fail-private-detail"))
                    .isInstanceOf(IllegalStateException.class)
                    .hasMessage("fail-private-detail");
            assertThat(appender.list).hasSize(2);
            assertThat(appender.list.get(0).getFormattedMessage()).contains("succeeded=true");
            assertThat(appender.list.get(1).getFormattedMessage()).contains("succeeded=false");
            for (var event : appender.list) {
                assertThat(event.getFormattedMessage())
                        .contains("TEST_OPERATION")
                        .doesNotContain("private-password-and-token", "fail-private-detail");
                assertThat(event.getThrowableProxy()).isNull();
            }
        } finally {
            logger.detachAppender(appender);
            appender.stop();
        }
    }
}
