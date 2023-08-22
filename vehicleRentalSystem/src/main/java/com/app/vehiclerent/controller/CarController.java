package com.app.vehiclerent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.vehiclerent.entity.Car;
import com.app.vehiclerent.service.CarService;

@RestController
@CrossOrigin
@RequestMapping("/cars")
public class CarController {
    
    @Autowired
    private CarService vehicleService;
    
    @GetMapping
    public List<Car> getAllVehicles() {
        return vehicleService.getAllCars();
    }
    
    @GetMapping("/{id}")
    public Car getVehicleById(@PathVariable Long id) {
        return vehicleService.getCarById(id);
    }
    
    @PostMapping
    public Car createVehicle(@RequestBody Car Car) {
        return vehicleService.createCar(Car);
    }
    
    @PutMapping("/{id}")
    public Car updateVehicle(@PathVariable Long id, @RequestBody Car Car) {
        return vehicleService.updateCar(id, Car);
    }
    
    @DeleteMapping("/{id}")
    public void deleteVehicle(@PathVariable Long id) {
        vehicleService.deleteCar(id);
    }
}
