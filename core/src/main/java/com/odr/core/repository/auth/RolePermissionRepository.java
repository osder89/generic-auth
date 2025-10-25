package com.odr.core.repository.auth;

import com.odr.model.auth.RolePermission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolePermissionRepository extends JpaRepository<RolePermission, Long> {
}
