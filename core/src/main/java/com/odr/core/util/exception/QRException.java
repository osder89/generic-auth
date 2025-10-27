package com.odr.core.util.exception;

public class QRException extends RuntimeException {
    public QRException(String message, Throwable cause) {
        super(message,cause);
    }
    public QRException(String message) {
        super(message);
    }
}
