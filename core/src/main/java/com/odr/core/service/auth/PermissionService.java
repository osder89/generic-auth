package com.odr.core.service.auth;

import com.odr.model.auth.Permission;
import com.odr.model.auth.User;
import com.odr.model.auth.dto.PermissionDto;
import com.odr.model.auth.dto.UserDto;

import java.util.List;

public interface PermissionService {

    PermissionDto createPermission( PermissionDto permissionDto);

    List<Permission> getPermission();
}
