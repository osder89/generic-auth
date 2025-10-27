package com.odr.core.repository.auth;

import com.odr.model.auth.Permission;
import com.odr.model.auth.dto.PermissionDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PermissionRepository extends JpaRepository<Permission, Long> {

    @Query("SELECT CASE WHEN COUNT(pr) > 0 THEN TRUE ELSE FALSE END " +
            "FROM Permission pr " +
            "WHERE pr.deleted = FALSE " +
            "AND pr.name = :name " )
    boolean existsByName(@Param("name") String name);

    @Query("SELECT NEW com.odr.model.auth.dto.PermissionDto( pr ) " +
            "FROM Permission pr " +
            "WHERE pr.deleted = FALSE " )
    Page<PermissionDto> paged( Pageable pageable );
}
