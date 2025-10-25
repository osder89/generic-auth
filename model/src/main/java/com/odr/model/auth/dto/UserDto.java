package com.odr.model.auth.dto;

import com.odr.model.auth.User;
import lombok.*;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class UserDto {
    private String username;
    private String password;

    public UserDto( User user) {
        this.username = user.getUserName();
        this.password = user.getPassword();
    }
}
