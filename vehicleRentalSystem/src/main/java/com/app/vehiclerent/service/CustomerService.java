package com.app.vehiclerent.service;

import java.util.List;
import com.app.vehiclerent.entity.Customer;

public interface CustomerService {
    List<Customer> getAllCustomers();

    Customer getCustomerById(Long id);

    Customer createCustomer(Customer customer);

    Customer updateCustomer(Long id, Customer customer);

    void deleteCustomer(Long id);

    Customer authenticate(String email, String password);
    
	Customer findByEmail(String email);

	List<Customer> findByRole(String role);
}
