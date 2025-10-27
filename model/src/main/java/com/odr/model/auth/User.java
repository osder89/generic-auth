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
@Table(name = "cie10")
public class User extends AuditableEntity implements Serializable {

    @Id
    @Column(name = "id")
    @SequenceGenerator(name = "SEQ_USER_ID_GENERATOR", sequenceName = "SEQ_USER_ID", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_USER_ID_GENERATOR")
    private Long id;

    @Basic
    @Column(name = "user_name" , length = 50)
    private String userName;

    @Basic
    @Column(name = "password", length = 50)
    private String password;
}
