package com.app.vehiclerent;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.app.vehiclerent.entity.Booking;
import com.app.vehiclerent.repository.BookingRepository;
import com.app.vehiclerent.service.BookingService;

@SpringBootApplication
public class VehicleRentalSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(VehicleRentalSystemApplication.class, args);
		
	}

}
