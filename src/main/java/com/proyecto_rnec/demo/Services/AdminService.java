package com.proyecto_rnec.demo.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.proyecto_rnec.demo.Documents.Admin;
import com.proyecto_rnec.demo.Repository.AdminRepository;

@Service
public class AdminService {
    private AdminRepository adminRepository;    


    //=======================================================
    // GET
    public List<Admin> getAll() {
        return adminRepository.getAll();
    }
    
    public Admin getAdmin(String id, String password) {
        Optional<Admin> objAdmin = adminRepository.getAdmin(id, password);
        Admin objAdminReturn;

        if (objAdmin.isEmpty())
            objAdminReturn = new Admin();
        else
            objAdminReturn = objAdmin.get();

        return objAdminReturn;
    }
    
    public Admin getAdminById(String id){
        return adminRepository.getAdminById(id);
    }
    
    public Boolean existId(String id) {
        Boolean flat = false;
        Optional<Admin> objAdmin = adminRepository.existId(id);

        if (!objAdmin.isEmpty())
            flat = true;

        return flat;
    }

    //=======================================================
    // POST
    public Admin newAdmin(Admin admin) {
        Boolean flat = true;
        
        if(admin.getId() == null)
            flat = false;
        
        if(admin.getPassword() == null)
            flat = false;

        flat = !existId(admin.getId());
        
        if(flat){
            return adminRepository.newAdmin(admin);
        } else{return admin;}          
    }


    //=======================================================
    // UPDATE
    public Admin updAdmin(Admin admin) {
        Admin myAdmin = adminRepository.getAdminById(admin.getId());

        if (!myAdmin.getNombre().equals("NO DEFINIDO"))
            return adminRepository.updAdmin(admin);
        else
            return admin;
    }


    //=======================================================
    // DELETE
    public void deleteAdmin(String idAdmin) {
        Admin myAdmin = adminRepository.getAdminById(idAdmin);

        if (!myAdmin.getNombre().equals("NO DEFINIDO"))
            adminRepository.deleteAdmin(idAdmin);
    }    
}
