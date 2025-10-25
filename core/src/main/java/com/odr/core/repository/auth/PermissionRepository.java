package com.odr.core.repository.auth;

import com.odr.model.auth.Permission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PermissionRepository extends JpaRepository<Permission, Long> {
}
