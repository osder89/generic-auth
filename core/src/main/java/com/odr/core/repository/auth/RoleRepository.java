package com.odr.core.repository.auth;

import com.odr.model.auth.Role;
import com.odr.model.auth.dto.PermissionDto;
import com.odr.model.auth.dto.RoleDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RoleRepository extends JpaRepository<Role, Long> {

    @Query("SELECT CASE WHEN COUNT( ro ) > 0 THEN TRUE ELSE FALSE END " +
            "FROM Role ro " +
            "WHERE ro.deleted = FALSE " +
            "AND ro.name = :name " )
    boolean existsByName( @Param( "name" ) String name );

    @Query("SELECT NEW com.odr.model.auth.dto.RoleDto( ro ) " +
            "FROM Role ro " +
            "WHERE ro.deleted = FALSE " )
    Page<RoleDto> paged( Pageable pageable );
}
