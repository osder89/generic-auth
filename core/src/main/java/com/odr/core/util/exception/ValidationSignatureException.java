package com.odr.core.util.exception;

public class ValidationSignatureException extends RuntimeException {
    public ValidationSignatureException(String mensaje) {
        super(mensaje);
    }

    public  ValidationSignatureException(String mensaje, Throwable e){
        super(mensaje, e);
    }
}
