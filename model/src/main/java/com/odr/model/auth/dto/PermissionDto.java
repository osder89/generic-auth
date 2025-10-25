package com.odr.model.auth.dto;

import com.odr.model.auth.Permission;
import lombok.*;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PermissionDto {

    private String name;
    private String description;

    public PermissionDto( Permission permission) {
        this.name = permission.getName();
        this.description = permission.getDescription();
    }
}
