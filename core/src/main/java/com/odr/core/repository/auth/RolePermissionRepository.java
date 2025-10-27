package com.odr.core.repository.auth;

import com.odr.model.auth.RolePermission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RolePermissionRepository extends JpaRepository<RolePermission, Long> {

    @Query("SELECT CASE WHEN COUNT( rp ) > 0 THEN TRUE ELSE FALSE END " +
            "FROM RolePermission rp " +
            "WHERE rp.deleted = FALSE " +
            "AND  rp.role.id = :roleId " +
            "AND  rp.permission.id = :permissionId " )
    boolean existsByRoleAndPermission( @Param("roleId") Long roleId, @Param("permissionId") Long permissionId );
}
