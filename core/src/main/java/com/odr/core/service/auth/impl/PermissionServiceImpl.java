package com.odr.core.service.auth.impl;

import com.odr.core.repository.auth.PermissionRepository;
import com.odr.core.service.auth.PermissionService;
import com.odr.core.util.ValidationUtil;
import com.odr.core.util.exception.OperationException;
import com.odr.model.auth.Permission;
import com.odr.model.auth.User;
import com.odr.model.auth.dto.PermissionDto;
import com.odr.model.auth.dto.UserDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


@Slf4j
@RequiredArgsConstructor
@Service("permissionService")
public class PermissionServiceImpl implements PermissionService {

    private final PermissionRepository permissionRepository;

    @Override
    public PermissionDto createPermission( PermissionDto permissionDto ) {
        try {
            ValidationUtil.throwExceptionRequiredIfBlank("name", permissionDto.getName());
            ValidationUtil.throwExceptionRequiredIfNull("description", permissionDto.getDescription());

            if ( permissionRepository.existsByName(permissionDto.getName()) ) {
                throw new OperationException("El Permiso \"" + permissionDto.getName() + "\" ya se encuentra registrado");
            }

            Permission permission = permissionRepository.save(
                    Permission.builder()
                            .name( permissionDto.getName() )
                            .description( permissionDto.getDescription() )
                            .build()

            );
            PermissionDto dto = new PermissionDto( permission );
            return dto;
        } catch (Exception e) {
            throw new OperationException(e.getMessage());
        }
    }

    @Override
    public List<Permission> getPermission() {
        return permissionRepository.findAll();
    }

    @Override
    public Page<PermissionDto> getPermissionPage(Pageable pageable) {
        try {
            return permissionRepository.paged( pageable );
        } catch (Exception e) {
            throw new OperationException(e.getMessage());
        }
    }
}
