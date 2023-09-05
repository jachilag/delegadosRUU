package com.proyecto_rnec.demo.DTO;

import java.io.Serializable;

import com.proyecto_rnec.demo.Documents.Puesto;

public class CreatedPuesto implements Serializable {
    private Puesto puesto;
    private Boolean creado;

    public CreatedPuesto() {
    }

    public CreatedPuesto(Puesto puesto, Boolean creado) {
        this.puesto = puesto;
        this.creado = creado;
    }

    public Puesto getPuesto() {
        return puesto;
    }

    public void setPuesto(Puesto puesto) {
        this.puesto = puesto;
    }

    public Boolean getcreado() {
        return creado;
    }

    public void setcreado(Boolean creado) {
        this.creado = creado;
    }   
}
