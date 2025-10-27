package com.odr.core.util.exception;

public class ProxyModUserException extends Exception {

	 private String codigo;
	    public ProxyModUserException() {
	    }

	    public ProxyModUserException(String message) {
	        super(message);
	    }
	    public ProxyModUserException(String message, String codigo) {
	        super(message);
	        this.codigo=codigo;
	    }

	    public ProxyModUserException(String message, Throwable cause) {
	        super(message, cause);
	    }

	    public ProxyModUserException(Throwable cause) {
	        super(cause);
	    }
	    
}
