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
@Document(collection = "administradores")
public class Administrador implements Serializable {
    @Id
    private String id;
    private String nombre;
    private String password;
    
}
