package com.odr.core.service.auth.impl;

import com.odr.core.repository.auth.PermissionRepository;
import com.odr.core.repository.auth.RolePermissionRepository;
import com.odr.core.repository.auth.RoleRepository;
import com.odr.core.service.auth.RolePermissionService;
import com.odr.core.util.exception.OperationException;
import com.odr.model.auth.Permission;
import com.odr.model.auth.Role;
import com.odr.model.auth.RolePermission;
import com.odr.model.auth.dto.RoleDto;
import com.odr.model.auth.dto.RolePermissionDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service("rolePermissionService")
public class RolePermissionServiceImpl implements RolePermissionService {

    private final RolePermissionRepository rolePermissionRepository;

    private final RoleRepository roleRepository;

    private final PermissionRepository permissionRepository;

    @Override
    public RolePermissionDto assignmentPermission( Long idRol, Long idPermission ) {
        try {

            Role role = roleRepository.findById( idRol )
                    .orElseThrow(() -> new OperationException("Rol: " + idRol ));

            Permission permission = permissionRepository.findById( idPermission )
                    .orElseThrow(() -> new OperationException("Permiso: " + idPermission ));

            if ( rolePermissionRepository.existsByRoleAndPermission( idRol, idPermission )) {
                throw new OperationException("El Permiso \"" + permission.getName() + "\" ya se encuentra asignado al rol \"" + role.getName() + "\".");
            }

            RolePermission rolePermission = rolePermissionRepository.save(
                    RolePermission.builder()
                            .role( role )
                            .permission( permission )
                            .build()

            );
            RolePermissionDto dto = new RolePermissionDto( role, permission );
            return dto;
        } catch (Exception e) {
            throw new OperationException(e.getMessage());
        }
    }

}
