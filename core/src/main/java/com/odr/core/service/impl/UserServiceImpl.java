package com.odr.core.service.impl;


import com.odr.core.repository.UserRepository;
import com.odr.core.service.UserService;
import com.odr.model.auth.User;
import com.odr.model.auth.dto.UserDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service("userService")
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public UserDto createUser( UserDto userDto ) {
        User user = userRepository.save(
                User.builder()
                        .userName( userDto.getUsername() )
                        .password( userDto.getPassword() )
                        .build()

        );
        UserDto dto = new UserDto( user );
        log.info( userDto.toString() );
        return dto;
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
