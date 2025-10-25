package com.odr.model.commons;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public abstract class AuditableEntity implements Serializable,Cloneable {

    @CreatedDate
    protected Date createdDate;

    @LastModifiedDate
    protected Date modifiedDate;

    @CreatedBy
    protected String createdBy;

    @LastModifiedBy
    protected String modifiedBy;

    @Version
    protected  Long version;

    protected boolean deleted = false;

    public Object clone()throws CloneNotSupportedException{
        return (AuditableEntity)super.clone();
    }


}
