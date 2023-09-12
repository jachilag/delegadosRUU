package com.proyecto_rnec.demo.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto_rnec.demo.Documents.Administrador;
import com.proyecto_rnec.demo.Repository.AdministradorRepository;

@Service
public class AdministradorService {
    @Autowired
    AdministradorRepository administradorRepository;


    //=======================================================
    // GET
    public List<Administrador> getAll() {
        return administradorRepository.getAll();
    }

    public Administrador getAdmin(String id, String password) {
        return administradorRepository.getAdmin(id, password);
    }


    public Administrador getAdminById(String id) {
        return administradorRepository.getAdminById(id);
    }


    //=======================================================
    // POST
    public Boolean newAdministrador(Administrador administrador) {
        if(!existId(administrador.getId())){
            administradorRepository.newAdministrador(administrador);
            return true;
        } else{return false;} 
    }

    public Boolean existId(String id) {
        Boolean flat = false;
        Optional<Administrador> objAdministrador = administradorRepository.existId(id);

        if (!objAdministrador.isEmpty())
            flat = true;

        return flat;
    }


    //=======================================================
    // UPDATE
    public Administrador updAdmin(Administrador admin) {
        Administrador myAdmin = administradorRepository.getAdminById(admin.getId());

        if (!myAdmin.getNombre().equals("NO DEFINIDO"))
            return administradorRepository.updAdmin(admin);
        else
            return admin;
    }


    //=======================================================
    // DELETE
    public void deleteAdmin(String id) {
        Administrador myAdmin = administradorRepository.getAdminById(id);

        if (!myAdmin.getNombre().equals("NO DEFINIDO"))
            administradorRepository.deleteAdmin(id);
    }


}
