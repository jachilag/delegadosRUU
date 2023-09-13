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

import com.proyecto_rnec.demo.Documents.Administrador;
import com.proyecto_rnec.demo.Services.AdministradorService;

@RestController
@RequestMapping("/api/administrador")
public class AdministradorController {
    @Autowired
    private AdministradorService administradorService;
    
    //=======================================================
    // GET
    @GetMapping("/all")
    public List<Administrador> getAll(){
        return administradorService.getAll();
    }

    @GetMapping("/{id}/{password}")
    public Administrador getAdmin(@PathVariable("id") String id, 
                        @PathVariable("password") String password) {
        return administradorService.getAdmin(id, password);
    }

    @GetMapping("/id/{id}")
    public Administrador getAdminById(@PathVariable("id") String id) {
        return administradorService.getAdminById(id);
    }

    //=======================================================
    // POST
    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Boolean newDelegado(@RequestBody Administrador administrador) {
        return administradorService.newAdministrador(administrador);
    }

    //=======================================================
    // UPDATE
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Administrador updateAdmin(@RequestBody Administrador Admin) {
        return administradorService.updAdmin(Admin);
    }


    //=======================================================
    // DELETE
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAdmin(@PathVariable("id") String id) {
        administradorService.deleteAdmin(id);
    }
}
