package com.odr.core.util.exception;

public class ParameterNotFoundException extends RuntimeException {
    public ParameterNotFoundException(String message, Throwable cause) {
        super(message,cause);
    }
    public ParameterNotFoundException(String message) {
        super(message);
    }
}
