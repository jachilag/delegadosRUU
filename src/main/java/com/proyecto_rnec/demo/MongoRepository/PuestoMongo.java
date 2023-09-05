package com.proyecto_rnec.demo.MongoRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.proyecto_rnec.demo.Documents.Puesto;

public interface PuestoMongo extends MongoRepository<Puesto, Integer>{

    Optional<Puesto> findById(String id);

    Optional<Puesto> findByNombre(String nombre);

    List<Puesto> findByLocalidad(String localidad);

    void deleteById(String id);
    
}