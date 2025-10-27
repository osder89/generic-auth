package com.odr.backofficeapi.rest;

import com.odr.core.service.UserService;
import com.odr.model.auth.User;
import com.odr.model.auth.dto.UserDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
public class UserController {

    private final UserService userService;

    @PostMapping("/create")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        UserDto createdUser = userService.createUser(userDto);
        return ResponseEntity.ok(createdUser);
    }

    @GetMapping("/list")
    public ResponseEntity<List<User>> listUsers() {
        List<User> users = userService.getUsers();
        return ResponseEntity.ok(users);
    }

}
