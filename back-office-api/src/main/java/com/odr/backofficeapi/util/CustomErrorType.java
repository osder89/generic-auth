package com.odr.backofficeapi.util;


import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.io.Serializable;

@AllArgsConstructor
@Getter
public class CustomErrorType implements Serializable {
    private String title;
    private HttpStatus status;
    private String detail;

    private CustomErrorType(HttpStatus status, String detail) {
        this.status = status;
        this.detail = detail;
    }

    public static ResponseEntity badRequest(String title, String detail) {
        return new ResponseEntity<>(new CustomErrorType(title, HttpStatus.BAD_REQUEST, detail), HttpStatus.BAD_REQUEST);
    }

    public static ResponseEntity badRequest(String detail) {
        return new ResponseEntity<>(new CustomErrorType(HttpStatus.BAD_REQUEST, detail), HttpStatus.BAD_REQUEST);
    }

    public static ResponseEntity serverError(String title, String detail) {
        return new ResponseEntity<>(new CustomErrorType(title, HttpStatus.INTERNAL_SERVER_ERROR, detail), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public static ResponseEntity serverError(String detail) {
        return new ResponseEntity<>(new CustomErrorType(HttpStatus.INTERNAL_SERVER_ERROR, detail), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public static ResponseEntity<?> notContent(String title, String detail) {
        return new ResponseEntity<>(new CustomErrorType(title, HttpStatus.NO_CONTENT, detail), HttpStatus.NO_CONTENT);
    }

    public static ResponseEntity<?> notFound(String title, String detail) {
        return new ResponseEntity<>(new CustomErrorType(title, HttpStatus.NOT_FOUND, detail), HttpStatus.NOT_FOUND);
    }

    public static ResponseEntity<?> unauthorized(String detail) {
        return new ResponseEntity<>(new CustomErrorType(HttpStatus.UNAUTHORIZED, detail), HttpStatus.NOT_FOUND);
    }

}
