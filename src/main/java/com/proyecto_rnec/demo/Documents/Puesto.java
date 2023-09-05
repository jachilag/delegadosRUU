package com.proyecto_rnec.demo.Documents;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "puestos")
public class Puesto implements Serializable {
    @Id
    private String id;
    private Integer mesas;
    private String nombre;
    private String ubicacion;
    private String direccion;  
    private String nombre_encargado;  
    private String cel_encargado;  
    private String correo_encargado;  
    private String localidad;  
}
