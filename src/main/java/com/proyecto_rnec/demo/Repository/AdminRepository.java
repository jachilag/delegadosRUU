package com.proyecto_rnec.demo.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.proyecto_rnec.demo.Documents.Admin;
import com.proyecto_rnec.demo.MongoRepository.AdminMongo;

@Repository
public class AdminRepository {
    @Autowired
    private AdminMongo adminMongo;


    //=======================================================
    // GET
    public Optional<Admin> getAdmin(String id, String password) {
        return adminMongo.findByIdAndPassword(id, password);
    }
    
    public List<Admin> getAll() {
        return (List<Admin>) adminMongo.findAll();
    }

    public Admin getAdminById(String idAdmin) {
        Optional<Admin> objAdmin = adminMongo.findById(idAdmin);
        Admin objAdminReturn = new Admin();

        if (objAdmin.isEmpty()){
            objAdminReturn.setId(idAdmin);
            objAdminReturn.setNombre("NO DEFINIDO");
        } else {
            objAdminReturn = objAdmin.get();
        }

        return objAdminReturn;
    }

    public Optional<Admin> existId(String id) {
        return adminMongo.findById(id);
    }


    //=======================================================
    // POST
    public Admin newAdmin(Admin admin) {
        return adminMongo.save(admin);
    }


    //=======================================================
    // UPDATE
    public Admin updAdmin(Admin admin) {
        return adminMongo.save(admin);
    }


    //=======================================================
    // DELETE
    public void deleteAdmin(String idAdmin) {
        adminMongo.deleteById(idAdmin);
    }
    
}
