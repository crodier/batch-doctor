package com.batchdoctor;

import com.batchdoctor.config.AsyncSyncConfiguration;
import com.batchdoctor.config.EmbeddedElasticsearch;
import com.batchdoctor.config.EmbeddedKafka;
import com.batchdoctor.config.EmbeddedSQL;
import com.batchdoctor.config.JacksonConfiguration;
import com.batchdoctor.config.TestSecurityConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(
    classes = { BatchDoctorApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class, TestSecurityConfiguration.class }
)
@EmbeddedElasticsearch
@EmbeddedSQL
@EmbeddedKafka
public @interface IntegrationTest {
}
