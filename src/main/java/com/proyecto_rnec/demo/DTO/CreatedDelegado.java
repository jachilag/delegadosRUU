package com.proyecto_rnec.demo.DTO;

import java.io.Serializable;

import com.proyecto_rnec.demo.Documents.Delegado;


public class CreatedDelegado implements Serializable {
    private Delegado delegado;
    private Boolean creado;

    public CreatedDelegado() {
    }

    public CreatedDelegado(Delegado delegado, Boolean creado) {
        this.delegado = delegado;
        this.creado = creado;
    }

    public Delegado getDelegado() {
        return delegado;
    }

    public void setDelegado(Delegado delegado) {
        this.delegado = delegado;
    }

    public Boolean getcreado() {
        return creado;
    }

    public void setcreado(Boolean creado) {
        this.creado = creado;
    }    
}
