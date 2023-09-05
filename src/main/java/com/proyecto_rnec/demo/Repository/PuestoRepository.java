package com.proyecto_rnec.demo.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.proyecto_rnec.demo.Documents.Puesto;
import com.proyecto_rnec.demo.MongoRepository.PuestoMongo;

@Repository
public class PuestoRepository {
    @Autowired
    private PuestoMongo puestoMongo;

    //=======================================================
    // GET
    public List<Puesto> getAll() {
        return (List<Puesto>) puestoMongo.findAll();
    }

    public Optional<Puesto> getPuestoById(String id) {
        return puestoMongo.findById(id);
    }

    public Optional<Puesto> getPuestoByNombre(String nombre) {
        return puestoMongo.findByNombre(nombre);
    }

    public List<Puesto> getPuestosByLocalidad(String localidad) {
        return (List<Puesto>) puestoMongo.findByLocalidad(localidad);
    }

    
    //=======================================================
    // POST
    public Puesto newPuesto(Puesto puesto) {
        return puestoMongo.save(puesto);
    }

    public List<Puesto> saveAll(List<Puesto> createdPuesto) {
        return puestoMongo.saveAll(createdPuesto);
    }

    //=======================================================
    // UPDATE
    public Puesto updPuesto(Puesto puesto) {
        return puestoMongo.save(puesto);
    }

    //=======================================================
    // DELETE
    public void deletePuesto(String id) {
        puestoMongo.deleteById(id);
    }

    public void deletePuestos() {
        puestoMongo.deleteAll();
    }
}