package com.app.vehiclerent.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.vehiclerent.entity.Car;

public interface CarService {
    List<Car> getAllCars();

    Car getCarById(Long id);

    Car createCar(Car car);

    Car updateCar(Long id, Car car);

    void deleteCar(Long id);

    void uploadImages(Long carId, List<MultipartFile> files);

    byte[] getCarImage(Long carId, Long imageId) throws Exception;

    String saveImage(MultipartFile file);
}
