package com.odr.core.service.auth.impl;


import com.odr.core.repository.auth.RoleRepository;
import com.odr.core.service.auth.RoleService;
import com.odr.core.util.ValidationUtil;
import com.odr.core.util.exception.OperationException;
import com.odr.model.auth.Role;
import com.odr.model.auth.dto.RoleDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service("roleService")
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    @Override
    public RoleDto createRole(RoleDto roleDto ) {
        try {
            ValidationUtil.throwExceptionRequiredIfBlank("name", roleDto.getName());
            ValidationUtil.throwExceptionRequiredIfNull("description", roleDto.getDescription());

            if (roleRepository.existsByName(roleDto.getName())) {
                throw new OperationException("El Rol \"" + roleDto.getName() + "\" ya se encuentra registrado");
            }

            Role role = roleRepository.save(
                    Role.builder()
                            .name( roleDto.getName() )
                            .description( roleDto.getDescription() )
                            .build()

            );
            RoleDto dto = new RoleDto( role );
            return dto;
        } catch (Exception e) {
            throw new OperationException(e.getMessage());
        }
    }

    @Override
    public Page<RoleDto> pageRole(Pageable pageable ) {
        try {
            return roleRepository.paged( pageable );
        } catch (Exception e) {
            throw new OperationException(e.getMessage());
        }
    }

}
