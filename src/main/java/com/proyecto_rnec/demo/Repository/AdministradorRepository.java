package com.proyecto_rnec.demo.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.proyecto_rnec.demo.Documents.Administrador;
import com.proyecto_rnec.demo.MongoRepository.AdministradorMongo;

@Repository
public class AdministradorRepository {
    @Autowired
    AdministradorMongo administradorMongo;

    //=======================================================
    // GET
    public List<Administrador> getAll() {
        return (List<Administrador>) administradorMongo.findAll();
    }

    public Administrador getAdmin(String id, String password) {
        Optional<Administrador> objAdmin = administradorMongo.findByIdAndPassword(id, password);
        Administrador objAdminReturn = new Administrador();

        if (objAdmin.isEmpty()){
            objAdminReturn.setId(null);
            objAdminReturn.setPassword(null);
            objAdminReturn.setNombre("NO DEFINIDO");
        } else {
            objAdminReturn = objAdmin.get();
        }

        return objAdminReturn;
    }

    public Administrador getAdminById(String id) {
        Optional<Administrador> objAdmin = administradorMongo.findById(id);
        Administrador objAdminReturn = new Administrador();

        if (objAdmin.isEmpty()){
            objAdminReturn.setId(id);
            objAdminReturn.setNombre("NO DEFINIDO");
        } else {
            objAdminReturn = objAdmin.get();
        }

        return objAdminReturn;
    }

    
    //=======================================================
    // POST
    public Administrador newAdministrador(Administrador administrador) {
        return administradorMongo.save(administrador);
    }

    public Optional<Administrador> existId(String id) {
        return administradorMongo.findById(id);
    }

    
    //=======================================================
    // UPDATE
    public Administrador updAdmin(Administrador admin) {
        return administradorMongo.save(admin);
    }


    //=======================================================
    // DELETE
    public void deleteAdmin(String id) {
        administradorMongo.deleteById(id);
    }

}
