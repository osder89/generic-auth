package com.odr.backofficeapi.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping("/secure")
    public ResponseEntity<String> secureEndpoint(@AuthenticationPrincipal Jwt jwt) {
        // Aquí Jwt contiene toda la información del token validado
        return ResponseEntity.ok("Conectado correctamente a Keycloak. Usuario: " + jwt.getSubject());
    }

    @GetMapping("/public")
    public ResponseEntity<String> publicEndpoint() {
        return ResponseEntity.ok("Este endpoint es público");
    }
}

