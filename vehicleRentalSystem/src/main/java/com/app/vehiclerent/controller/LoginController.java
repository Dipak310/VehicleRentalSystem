package com.app.vehiclerent.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.vehiclerent.entity.Customer;
import com.app.vehiclerent.service.CustomerService;

import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class LoginController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/authenticateUser")
    public ResponseEntity<?> authenticateUser(@RequestBody Customer customer, HttpSession session) {
        if (customer.getEmail() == null || customer.getPassword() == null) {
            return ResponseEntity.badRequest().body("Email and password are required");
        }  

        Customer authcustomer = customerService.findByEmail(customer.getEmail());

        if (authcustomer != null && authcustomer.getRole().equals("admin")) {
            if (authcustomer.getPassword().equals(customer.getPassword())) {
                return ResponseEntity.ok(authcustomer);
            }
        } else if (authcustomer != null && authcustomer.getRole().equals("customer")) {
            if (authcustomer.getPassword().equals(customer.getPassword())) {
                return ResponseEntity.ok(authcustomer);
            }
        }
        return ResponseEntity.badRequest().body("User not found");
    }
}
