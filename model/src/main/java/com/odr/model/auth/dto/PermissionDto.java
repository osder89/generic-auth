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

    public PermissionDto( Permission user) {
        this.name = user.getName();
        this.description = user.getDescription();
    }
}
