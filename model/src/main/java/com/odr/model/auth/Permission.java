package com.odr.model.auth;


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
@Table(name = "Permission")
public class Permission implements Serializable {

    @Id
    @Column(name = "id")
    @SequenceGenerator(name = "SEQ_PERMISSION_ID_GENERATOR", sequenceName = "SEQ_PERMISSION_ID", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_PERMISSION_ID_GENERATOR")
    private Long id;

    @Basic
    @Column(name = "name" , length = 50)
    private String name;

    @Basic
    @Column(name = "description", length = 150)
    private String description;

}
