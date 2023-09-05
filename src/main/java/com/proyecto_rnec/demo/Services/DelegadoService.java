package com.proyecto_rnec.demo.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto_rnec.demo.DTO.CreatedDelegado;
import com.proyecto_rnec.demo.Documents.Delegado;
import com.proyecto_rnec.demo.Repository.DelegadoRepository;

@Service
public class DelegadoService {
    @Autowired
    private DelegadoRepository delegadoRepository;

    //=======================================================
    // GET
    public List<Delegado> getAll() {
        return delegadoRepository.getAll();
    }
    
    public Delegado getDelegadoById(String id) {
        return delegadoRepository.getDelegadoById(id);
    }
    
    public List<Delegado> getDelegadosByPuesto(Integer puesto) {
        return delegadoRepository.getDelegadosByPuesto(puesto);
    }


    //=======================================================
    // POST
    public Boolean newDelegado(Delegado delegado) {   
        if(!existId(delegado.getId())){
            delegadoRepository.newDelegado(delegado);
            return true;
        } else{return false;} 
    }
    
    public List<CreatedDelegado> newDelegados(List<Delegado> delegados) {
        List<CreatedDelegado> requestDelegados = new ArrayList<CreatedDelegado>();
        List<Delegado> createdDelegado = new ArrayList<Delegado>();
        Boolean resultado;
        for(Delegado delegado : delegados){
            resultado = !existId(delegado.getId());

            if(resultado)
                createdDelegado.add(delegado);

            requestDelegados.add(new CreatedDelegado(delegado,resultado));
        }

        delegadoRepository.saveAll(createdDelegado);
        return requestDelegados;
    }

    //validate if identification exists in the repository
    public Boolean existId(String id) {
        Boolean flat = false;
        Optional<Delegado> objDelegado = delegadoRepository.existId(id);

        if (!objDelegado.isEmpty())
            flat = true;

        return flat;
    }
    

    //=======================================================
    // UPDATE
	public Delegado updDelegado(Delegado delegado) {
        Delegado myDelegado = delegadoRepository.getDelegadoById(delegado.getId());

        if (!myDelegado.getNombre().equals("NO DEFINIDO"))
            return delegadoRepository.updDelegado(delegado);
        else
            return delegado;
	}
    
    public List<Delegado> updDelegados(List<Delegado> delegados) {
        return delegadoRepository.saveAll(delegados);
    }
    

    //=======================================================
    // DELETE
    public void deleteDelegado(String idDelegado) {
        Delegado myDelegado = delegadoRepository.getDelegadoById(idDelegado);

        if (!myDelegado.getNombre().equals("NO DEFINIDO"))
            delegadoRepository.deleteDelegado(idDelegado);
 
    }

    public void deleteDelegados() {
        delegadoRepository.deleteDelegados();
    }
}

