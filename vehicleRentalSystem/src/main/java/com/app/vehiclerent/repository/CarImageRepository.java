package com.app.vehiclerent.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.vehiclerent.entity.CarImage;

public interface CarImageRepository extends JpaRepository<CarImage, Long> {
	// Define a custom query to find a CarImage by carId and id
    @Query("SELECT ci FROM CarImage ci WHERE ci.car.carId = :carId AND ci.id = :imageId")
    CarImage findByCarCarIdAndId(@Param("carId") Long carId, @Param("imageId") Long imageId);
}
