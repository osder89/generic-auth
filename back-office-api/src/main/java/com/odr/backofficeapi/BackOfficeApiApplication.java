package com.odr.backofficeapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com.odr")
@EnableJpaRepositories(basePackages = "com.odr.core.repository")
@EntityScan(basePackages = "com.odr.model")
public class BackOfficeApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackOfficeApiApplication.class, args);
    }

}
