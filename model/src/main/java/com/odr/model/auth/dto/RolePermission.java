package com.odr.model.auth.dto;


import com.odr.model.auth.Permission;
import com.odr.model.auth.Role;
import lombok.*;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RolePermission {
    private Long idRole;
    private Long idPermission;

    public RolePermission( Role role, Permission permission) {
        this.idRole = role.getId();
        this.idPermission = permission.getId();
    }

}
