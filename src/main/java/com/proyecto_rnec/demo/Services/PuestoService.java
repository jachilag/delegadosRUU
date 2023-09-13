package com.proyecto_rnec.demo.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto_rnec.demo.DTO.CreatedPuesto;
import com.proyecto_rnec.demo.Documents.Puesto;
import com.proyecto_rnec.demo.Repository.PuestoRepository;

@Service
public class PuestoService {
    @Autowired
    private PuestoRepository puestoRepository;

    //=======================================================
    // GET
    public List<Puesto> getAll() {
        return puestoRepository.getAll();
    }

    public Puesto getPuestoById(String id) {
        Optional<Puesto> objPuesto = puestoRepository.getPuestoById(id);
        if(objPuesto.isPresent()) { 
            return objPuesto.get();
        } else {return new Puesto();}
    }

    public List<Puesto> getPuestosByLocalidad(String localidad) {
        return puestoRepository.getPuestosByLocalidad(localidad);
    }

    public Puesto getPuestoByNombre(String nombre) {
        Optional<Puesto> objPuesto = puestoRepository.getPuestoByNombre(nombre);
        if(objPuesto.isPresent()) { 
            return objPuesto.get();
        } else {return new Puesto();}
    }

    //=======================================================
    // POST
    public Boolean newPuesto(Puesto puesto) {
        if(!existId(puesto.getId())){
            puestoRepository.newPuesto(puesto);
            return true;
        } else{return false;} 
    }

    public List<CreatedPuesto> newPuestos(List<Puesto> puestos) {
        List<CreatedPuesto> requestPuestos = new ArrayList<CreatedPuesto>();
        List<Puesto> createdPuesto = new ArrayList<Puesto>();
        Boolean resultado;
        for(Puesto puesto : puestos){
            resultado = !existId(puesto.getId());

            if(resultado)
                createdPuesto.add(puesto);

            requestPuestos.add(new CreatedPuesto(puesto,resultado));
        }

        puestoRepository.saveAll(createdPuesto);
        return requestPuestos;
    }

    public Boolean existId(String id) {
        Optional<Puesto> objUser = puestoRepository.getPuestoById(id);
        return !objUser.isEmpty();
    }

    //=======================================================
    // UPDATE
	public Puesto updPuesto(Puesto puesto) {
        Optional<Puesto> myPuesto = puestoRepository.getPuestoById(puesto.getId());

        if (myPuesto.isPresent())
            return puestoRepository.updPuesto(puesto);
        else
            return new Puesto();
	}
    
    public List<Puesto> updPuestos(List<Puesto> puesto) {
        return puestoRepository.saveAll(puesto);
    }

    //=======================================================
    // DELETE
    public void deletePuesto(String id) {
        if(existId(id))
            puestoRepository.deletePuesto(id);
    }

    public void deletePuestos() {
        puestoRepository.deletePuestos();
    }
}
