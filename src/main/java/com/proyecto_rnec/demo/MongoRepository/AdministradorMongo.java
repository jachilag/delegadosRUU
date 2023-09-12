package com.proyecto_rnec.demo.MongoRepository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.proyecto_rnec.demo.Documents.Administrador;

public interface AdministradorMongo extends MongoRepository<Administrador, Integer>{

    public Optional<Administrador> findById(String id);

    public Optional<Administrador> findByIdAndPassword(String id, String password);

    public void deleteById(String id);
    
}
