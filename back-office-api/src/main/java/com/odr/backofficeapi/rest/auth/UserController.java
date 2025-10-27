package com.odr.backofficeapi.rest.auth;


import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/auth")
public class UserController {

    @GetMapping("/me")
    public Map<String, Object> getUserInfo(@AuthenticationPrincipal Jwt jwt) {
        Map<String, Object> info = new HashMap<>();
        info.put("username", jwt.getClaim("preferred_username"));
        info.put("realmRoles", jwt.getClaimAsMap("realm_access").get("roles"));

        Map<String, Object> resourceAccess = jwt.getClaim("resource_access");
        if (resourceAccess != null && resourceAccess.containsKey("backoffice-api")) {
            info.put("clientRoles", ((Map<String, Object>)resourceAccess.get("backoffice-api")).get("roles"));
        } else {
            info.put("clientRoles", Collections.emptyList());
        }

        return info;
    }
}
