package com.proyecto_rnec.demo.MongoRepository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.proyecto_rnec.demo.Documents.Admin;

public interface AdminMongo extends MongoRepository<Admin, Integer>{

    public void deleteById(String idAdmin);

    public Optional<Admin> findById(String id);

    public Optional<Admin> findByIdAndPassword(String id, String password);
    
}
