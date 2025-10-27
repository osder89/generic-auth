package com.odr.core.service.auth;

import com.odr.model.auth.Permission;
import com.odr.model.auth.dto.PermissionDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface PermissionService {

    PermissionDto createPermission( PermissionDto permissionDto);

    List<Permission> getPermission();

    Page<PermissionDto> getPermissionPage( Pageable pageable );
}
