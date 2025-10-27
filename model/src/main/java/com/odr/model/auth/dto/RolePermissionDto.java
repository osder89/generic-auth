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
public class RolePermissionDto {
    private Long idRole;
    private String roleName;
    private Long idPermission;
    private String permissionName;

    public RolePermissionDto( Role role, Permission permission ) {
        this.idRole = role.getId();
        this.roleName = role.getName();
        this.idPermission = permission.getId();
        this.permissionName = permission.getName();
    }

}
