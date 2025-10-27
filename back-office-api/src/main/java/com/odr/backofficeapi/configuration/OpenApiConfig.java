package com.odr.backofficeapi.configuration;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
        info = @Info(
                title = "APIs del módulo de usuario",
                version = "v1",
                description = "Esta aplicación provee APIs REST del módulo de usuario para la aplicación back-office-api",
                contact = @Contact(
                        name = "Oscar Del Rio",
                        email = "oscardelrio89@gmail.com"
                )
        ),
        servers = {
                @Server(
                        url = "http://localhost:8080",
                        description = " Servidor de desarrollo"
                )
        }
)
public class OpenApiConfig {
}
