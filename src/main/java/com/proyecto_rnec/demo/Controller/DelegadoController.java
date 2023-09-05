package com.proyecto_rnec.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto_rnec.demo.DTO.CreatedDelegado;
import com.proyecto_rnec.demo.Documents.Delegado;
import com.proyecto_rnec.demo.Services.DelegadoService;

@RestController
@RequestMapping("/api/delegado")
public class DelegadoController {
    @Autowired
    private DelegadoService delegadoService;

    //=======================================================
    // GET
    @GetMapping("/all")
    public List<Delegado> getAll(){
        return delegadoService.getAll();
    }
    
    @GetMapping("/id/{id}")
    public Delegado getDelegadoByIdentification(@PathVariable("id") String id){
        return delegadoService.getDelegadoById(id);
    }
    
    @GetMapping("/puesto/{puesto}")
    public List<Delegado> getDelegadosByPuesto(@PathVariable("puesto") Integer puesto){
        return delegadoService.getDelegadosByPuesto(puesto);
    }
    
    //=======================================================
    // POST
    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Boolean newDelegado(@RequestBody Delegado delegado) {
        return delegadoService.newDelegado(delegado);
    }

    @PostMapping("/newDelegados")
    @ResponseStatus(HttpStatus.CREATED)
    public List<CreatedDelegado> newDelegados(@RequestBody List<Delegado> delegados) {
        return delegadoService.newDelegados(delegados);
    }
    
    //=======================================================
    // UPDATE
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Delegado updateDelegado(@RequestBody Delegado delegado) {
        return delegadoService.updDelegado(delegado);
    }

    @PutMapping("/updateDelegados")
    @ResponseStatus(HttpStatus.CREATED)
    public List<Delegado> updateDelegados(@RequestBody List<Delegado> delegados) {
        return delegadoService.updDelegados(delegados);
    }

    //=======================================================
    // DELETE
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteDelegado(@PathVariable String id) {
        delegadoService.deleteDelegado(id);
    }

    @DeleteMapping("/all")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteDelegados() {
        delegadoService.deleteDelegados();
    }    
}

    //=======================================================
    // GET
    //=======================================================
    // POST
    //=======================================================
    // UPDATE
    //=======================================================
    // DELETE