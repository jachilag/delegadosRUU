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

import com.proyecto_rnec.demo.Documents.Admin;
import com.proyecto_rnec.demo.Services.AdminService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    //=======================================================
    // GET
    @GetMapping("/all")
    public List<Admin> getAll(){
        return adminService.getAll();
    }

    @GetMapping("existId/{id}")
    public Boolean existId(@PathVariable String id) {
        return adminService.existId(id);
    }

    @GetMapping("/{id}/{password}")
    public Admin getAdmin(@PathVariable("id") String id, 
                        @PathVariable("password") String password) {
        return adminService.getAdmin(id, password);
    }

    @GetMapping("/{id}")
    public Admin getAdminById(@PathVariable String id) {
        return adminService.getAdminById(id);
    }


    //=======================================================
    // POST
    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Admin newAdmin(@RequestBody Admin admin) {
        return adminService.newAdmin(admin);
    }

    
    //=======================================================
    // UPDATE
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Admin updateAdmin(@RequestBody Admin Admin) {
        return adminService.updAdmin(Admin);
    }


    //=======================================================
    // DELETE
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAdmin(@PathVariable String id) {
        adminService.deleteAdmin(id);
    }

    
}
