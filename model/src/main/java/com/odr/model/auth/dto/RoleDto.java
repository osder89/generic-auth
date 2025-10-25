package com.odr.model.auth.dto;

import com.odr.model.auth.Role;
import lombok.*;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RoleDto {

    private String name;
    private String description;

    public RoleDto( Role role) {
        this.name = role.getName();
        this.description = role.getDescription();
    }
}
