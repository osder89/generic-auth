package com.odr.core.service.auth;

import com.odr.model.auth.dto.RoleDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface RoleService {

    RoleDto createRole( RoleDto roleDto);

    Page<RoleDto> pageRole( Pageable pageable );
}
