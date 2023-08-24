package com.app.vehiclerent.serviceImpl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.vehiclerent.entity.Car;
import com.app.vehiclerent.entity.CarImage;
import com.app.vehiclerent.repository.CarImageRepository;
import com.app.vehiclerent.repository.CarRepository;
import com.app.vehiclerent.service.CarService;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepository carRepository;
    
    @Autowired
    private CarImageRepository carImageRepository;

    @Override
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    @Override
    public Car getCarById(Long id) {
        return carRepository.findById(id).orElse(null);
    }

    @Override
    public Car createCar(Car car) {
        return carRepository.save(car);
    }

    @Override
    public Car updateCar(Long id, Car car) {
        if (!carRepository.existsById(id)) {
            return null;
        }
        car.setCarId(id);
        return carRepository.save(car);
    }

    @Override
    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }

    @Override
    public void uploadImages(Long carId, List<MultipartFile> files) {
        Car car = carRepository.findById(carId).orElseThrow();

        for (MultipartFile file : files) {
            // Create a new CarImage entity and associate it with the car
            CarImage carImage = new CarImage();
            carImage.setCar(car);
            carImage.setImageUrl(saveImage(file));

            carImageRepository.save(carImage);
        }
    }

    @Override
    public String saveImage(MultipartFile file) {
        // Define the directory where you want to save the images
        String uploadDir = "src/main/resources/static/uploaded-images";

        // Generate a unique filename for the image to avoid overwriting existing files
        String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();

        // Create the full path to save the file
        String filePath = uploadDir + File.separator + fileName;

        // Ensure the directory exists; if not, create it
        File saveFile = new File(filePath);
        saveFile.getParentFile().mkdirs();

        // Use FileOutputStream to write the byte array to the file
        try (FileOutputStream fos = new FileOutputStream(saveFile)) {
            fos.write(file.getBytes());
        } catch (IOException e) {
            // Handle the exception appropriately, e.g., log the error
            throw new RuntimeException("Failed to save image", e);
        }

        // Return the URL or path where the image is saved
        return "/uploaded-images/" + fileName; // Adjust the path as needed
    }

    @Override
    public byte[] getCarImage(Long carId, Long imageId) throws Exception {
        // Retrieve the CarImage entity based on carId and imageId
        CarImage carImage = carImageRepository.findByCarCarIdAndId(carId, imageId);

        if (carImage == null) {
            // Handle the case where the image does not exist
            throw new Exception("Car image not found");
        }

        // Get the image URL from the CarImage entity
        String imageUrl = carImage.getImageUrl();

        // Construct the full file path
        String imagePath = "C:/Users/DIPAK/Downloads/vehicleRentalSystem/vehicleRentalSystem/src/main/resources/static" + imageUrl;

        try {
            if (Files.exists(Paths.get(imagePath))) {
                // Read the image bytes from the file
                return Files.readAllBytes(Paths.get(imagePath));
            } else {
                // Handle the case where the file does not exist
                throw new Exception("Image file not found at: " + imagePath);
            }
        } catch (IOException e) {
            // Handle the exception appropriately
            throw new Exception("Failed to retrieve image bytes", e);
        }
    }

}
