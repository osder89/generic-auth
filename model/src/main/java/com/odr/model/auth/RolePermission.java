package com.odr.model.auth;

import com.odr.model.commons.AuditableEntity;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Entity
@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "role_permission")
public class RolePermission extends AuditableEntity implements Serializable {

    @Id
    @Column(name = "id")
    @SequenceGenerator(name = "SEQ_ROLE_PERMISSION_ID_GENERATOR", sequenceName = "SEQ_ROLE_PERMISSION_ID", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_ROLE_PERMISSION_ID_GENERATOR")
    private Long id;

    @JoinColumn(name = "id_role", referencedColumnName = "id")
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    private Role role;

    @JoinColumn(name = "id_permission", referencedColumnName = "id")
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    private Permission permission;
}
