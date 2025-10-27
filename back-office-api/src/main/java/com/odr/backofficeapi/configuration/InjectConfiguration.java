package com.odr.backofficeapi.configuration;

import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.io.Serializable;
import java.util.Optional;
import java.util.concurrent.Executor;

@Slf4j
@Configuration
@EnableJpaAuditing
public class InjectConfiguration implements WebMvcConfigurer, Serializable {
    @Value("${cmc.thread.pool.core-size:8}")
    private int threadCorePoolSize;
    @Value("${cmc.thread.pool.max:40}")
    private int threadPoolMax;
    @Value("${cmc.thread.pool.queue-capacity:500}")
    private int threadQueueCapacity;
    @Value("${cmc.thread.pool.name:cmc-thead-}")
    private String threadName;
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
//    }

    @Autowired
    private CorsFilter corsFilter;

    @Bean("poolExecutor")
    public Executor poolExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(threadCorePoolSize);
        executor.setMaxPoolSize(threadPoolMax);
        executor.setQueueCapacity(threadQueueCapacity);
        executor.setThreadNamePrefix(threadName);
        executor.initialize();
        return executor;
    }

    @PostConstruct
    public void init() {
        log.info("✅ InjectConfiguration CARGADA correctamente por Spring.");
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    public AuditorAware<String> auditorAware() {
        return () -> {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if ((authentication != null) && (authentication.getPrincipal() != null)) {
                if (authentication.getPrincipal() instanceof Jwt) {
                    Jwt jwt = (Jwt) authentication.getPrincipal();
                    String fullName = jwt.getClaim("name");
                    return Optional.of(fullName);
                }
            }

            if (authentication == null || !authentication.isAuthenticated()) {
                return Optional.of("ADMIN");
            }

            try {
                return Optional.ofNullable(authentication.getName());
            } catch (Exception e) {
                return Optional.of("ADMIN");
            }
        };
    }
}
