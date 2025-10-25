package com.odr.core.service.auth.impl;

import com.odr.core.repository.auth.PermissionRepository;
import com.odr.core.service.auth.PermissionService;
import com.odr.model.auth.Permission;
import com.odr.model.auth.User;
import com.odr.model.auth.dto.PermissionDto;
import com.odr.model.auth.dto.UserDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;


@Slf4j
@RequiredArgsConstructor
@Service("permissionService")
public class PermissionServiceImpl implements PermissionService {

    private final PermissionRepository permissionRepository;

    @Override
    public PermissionDto createPermission(PermissionDto permissionDto) {
        Permission permission = permissionRepository.save(
                Permission.builder()
                        .name( permissionDto.getName() )
                        .description( permissionDto.getDescription() )
                        .build()

        );
        PermissionDto dto = new PermissionDto( permission );
        log.info( permissionDto.toString() );
        return dto;
    }

    @Override
    public List<Permission> getPermission() {
        return permissionRepository.findAll();
    }
}
