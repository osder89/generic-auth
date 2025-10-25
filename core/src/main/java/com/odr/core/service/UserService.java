package com.odr.core.service;

import com.odr.model.auth.User;
import com.odr.model.auth.dto.UserDto;

import java.util.List;

public interface UserService {

    UserDto createUser( UserDto userDto);

    List<User> getUsers();
}
