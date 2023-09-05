package com.proyecto_rnec.demo.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.proyecto_rnec.demo.Documents.Delegado;
import com.proyecto_rnec.demo.MongoRepository.DelegadoMongo;

@Repository
public class DelegadoRepository {
    @Autowired
    private DelegadoMongo delegadoMongo;

    
    //=======================================================
    // GET
    public Delegado getDelegadoById(String idDelegado) {
        Optional<Delegado> objDelegado = delegadoMongo.findById(idDelegado);
        Delegado objDelegadoReturn = new Delegado();

        if (objDelegado.isEmpty()){
            objDelegadoReturn.setId(idDelegado);
            objDelegadoReturn.setNombre("NO DEFINIDO");
        } else {
            objDelegadoReturn = objDelegado.get();
        }

        return objDelegadoReturn;
    }
    
    public List<Delegado> getAll() {
        return (List<Delegado>) delegadoMongo.findAll();
    }
    
    public List<Delegado> getDelegadosByPuesto(Integer puesto) {
        return (List<Delegado>) delegadoMongo.findByPuesto(puesto);
    }

    public Optional<Delegado> existId(String id) {
        return delegadoMongo.findById(id);
    }    
    //=======================================================
    // POST
    public Delegado newDelegado(Delegado delegado) {
        return delegadoMongo.save(delegado);
    }

    public List<Delegado> saveAll(List<Delegado> createdDelegado) {
        return delegadoMongo.saveAll(createdDelegado);
    }

    //=======================================================
    // UPDATE
    public Delegado updDelegado(Delegado delegado) {
        return delegadoMongo.save(delegado);
    }

    //=======================================================
    // DELETE
    public void deleteDelegado(String id) {
        delegadoMongo.deleteById(id);
    }

    public void deleteDelegados() {
        delegadoMongo.deleteAll();
    }
}



