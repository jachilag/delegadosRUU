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

import com.proyecto_rnec.demo.DTO.CreatedPuesto;
import com.proyecto_rnec.demo.Documents.Puesto;
import com.proyecto_rnec.demo.Services.PuestoService;

@RestController
@RequestMapping("/api/puesto")
public class PuestoController {
    @Autowired
    private PuestoService puestoService;
    
    //=======================================================
    // GET
    @GetMapping("/all")
    public List<Puesto> getAll() {
        return puestoService.getAll();
    }

    @GetMapping("/id/{id}")
    public Puesto getPuestoById(@PathVariable("id") String id) {
        return puestoService.getPuestoById(id);
    }

    @GetMapping("/localidad/{localidad}")
    public List<Puesto> getPuestosByLocalidad(@PathVariable("localidad") String localidad) {
        return puestoService.getPuestosByLocalidad(localidad);
    }

    @GetMapping("/nombre/{nombre}")
    public Puesto getPuestoByNombre(@PathVariable("nombre") String nombre) {
        return puestoService.getPuestoByNombre(nombre);
    }
    
    //=======================================================
    // POST
    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Boolean newPuesto(@RequestBody Puesto puesto){
        return puestoService.newPuesto(puesto);
    }

    @PostMapping("/newPuestos")
    @ResponseStatus(HttpStatus.CREATED)
    public List<CreatedPuesto> newPuestos(@RequestBody List<Puesto> puesto){
        return puestoService.newPuestos(puesto);
    }

    //=======================================================
    // UPDATE
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Puesto updPuesto(@RequestBody Puesto puesto){
        return puestoService.updPuesto(puesto);
    }

    @PutMapping("/updatePuestos")
    @ResponseStatus(HttpStatus.CREATED)
    public List<Puesto> updPuestos(@RequestBody List<Puesto> puesto){
        return puestoService.updPuestos(puesto);
    }

    //=======================================================
    // DELETE
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePuesto(@PathVariable String id){
        puestoService.deletePuesto(id);
    }

    @DeleteMapping("/all")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePuestos(){
        puestoService.deletePuestos();
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

