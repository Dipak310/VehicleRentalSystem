package com.app.vehiclerent.controller;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.vehiclerent.entity.Customer;
import com.app.vehiclerent.service.CustomerService;

import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin
public class LoginController {
	
	@Autowired  
	private CustomerService customerService;   
	
	  @PostMapping("/users/authenticateUser")
		public ResponseEntity<?> authenticateUser(Customer customer,HttpSession session) {

		  Customer authcustomer = customerService.findByEmail(customer.getEmail());
			
			if(authcustomer!=null && authcustomer.getRole().equals("admin") ){
				if(authcustomer.getPassword().equals(customer.getPassword()) ){
					
					return ResponseEntity.ok(authcustomer);
				}
			}else if(authcustomer!=null && authcustomer.getRole().equals("customer") ){
				if(authcustomer.getPassword().equals(customer.getPassword()) ){
					
					return ResponseEntity.ok(authcustomer);
				}
			}
			return ResponseEntity.badRequest().body("User not found");
		}

}
