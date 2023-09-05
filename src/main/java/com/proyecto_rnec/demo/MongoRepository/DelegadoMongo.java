package com.proyecto_rnec.demo.MongoRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.proyecto_rnec.demo.Documents.Delegado;

public interface DelegadoMongo extends MongoRepository<Delegado, Integer>{

    public Optional<Delegado> findById(String id);

    public List<Delegado> findByPuesto(Integer puesto);

    public void deleteById(String id);
}
