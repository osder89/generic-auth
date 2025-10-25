package com.odr.backofficeapi.rest.auth;

import com.odr.core.service.auth.PermissionService;
import com.odr.model.auth.Permission;
import com.odr.model.auth.dto.PermissionDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/permission")
public class PermissionController {

    private final PermissionService permissionService;

    @PostMapping("/create")
    public ResponseEntity<PermissionDto> createUser(@RequestBody PermissionDto permissionDto) {
        PermissionDto createPermission = permissionService.createPermission( permissionDto );
        return ResponseEntity.ok(createPermission);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Permission>> listUsers() {
        List<Permission> permission = permissionService.getPermission();
        return ResponseEntity.ok(permission);
    }
}
