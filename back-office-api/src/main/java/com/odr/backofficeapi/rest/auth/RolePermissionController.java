package com.odr.backofficeapi.rest.auth;

import com.odr.core.service.auth.RolePermissionService;
import com.odr.core.util.ApiConstants;
import com.odr.core.util.ApiUtil;
import com.odr.core.util.exception.ApiResponseException;
import com.odr.core.util.exception.OperationException;
import com.odr.model.auth.dto.RolePermissionDto;
import com.odr.model.commons.api.ResponseBody;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.ResponseEntity.ok;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/role-permission")
public class RolePermissionController {

    private final RolePermissionService rolePermissionService;

    @RequestMapping(method = RequestMethod.POST, value = "/assigment/{idRol}/{idPermission}")
    @Operation(summary = "PERMISSION",
            description = "PERMISSION",
            tags = {"PERMISSION"},
            responses = {
                    @ApiResponse(description = "Operación satisfactorio", responseCode = "200", content = @Content(mediaType = "application/json")),
                    @ApiResponse(description = "Registro creado", responseCode = "201", content = @Content(mediaType = "application/json")),
                    @ApiResponse(responseCode = "404", description = "Recurso no encontrado", content = @Content),
                    @ApiResponse(responseCode = "401", description = "Fallo de autentificación", content = @Content(schema = @Schema(hidden = true))),
                    @ApiResponse(responseCode = "403", description = "Acceso Denegado", content = @Content(schema = @Schema(hidden = true))),
            }, security = @SecurityRequirement(name = "bearerToken"))
    public ResponseEntity<ResponseBody<RolePermissionDto>> assigmentPermission( @PathVariable("idRol") Long idRol, @PathVariable("idPermission") Long idPermission ) {
        try {
            return ok(ApiUtil.buildResponseWithDefaults( rolePermissionService.assignmentPermission( idRol, idPermission )));
        } catch (OperationException e) {
            log.error("Error: Se produjo un error controlado al ejecutar el servicio, Mensaje: {}", e.getMessage());
            throw ApiResponseException.badRequest(e.getMessage());
        } catch (Exception e) {
            log.error("Error: Se produjo un error genérico al ejecutar el servicio: ", e);
            throw ApiResponseException.serverError(ApiConstants.INTERNAL_SERVER_ERROR);
        }
    }
}
