package com.odr.core.service.auth;

import com.odr.model.auth.dto.RolePermissionDto;

public interface RolePermissionService {

    RolePermissionDto assignmentPermission( Long idRol, Long idPermission );

}
