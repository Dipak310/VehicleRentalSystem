package com.app.vehiclerent.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table
public class Car {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long carId;

	private String model;
	private String licensePlate;
	private double mileage;
	private String fuelType;
	private String transmissionType;
	private int seatingCapacity;
	private double dailyRentalRate;
	private boolean available;
	private LocalDate lastMaintenanceDate;
	private String carImageLink;

	@OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Booking> bookings;
	
	@OneToMany(mappedBy = "car", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CarImage> carImages = new ArrayList<>();

	public Car() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Car(Long carId, String make, String model, int year, String color, String licensePlate, double mileage,
			String fuelType, String transmissionType, int seatingCapacity, double dailyRentalRate, boolean available,
			LocalDate lastMaintenanceDate, List<Booking> bookings, String carImageLink) {
		super();
		this.carId = carId;
		this.model = model;
		this.licensePlate = licensePlate;
		this.mileage = mileage;
		this.fuelType = fuelType;
		this.transmissionType = transmissionType;
		this.seatingCapacity = seatingCapacity;
		this.dailyRentalRate = dailyRentalRate;
		this.available = available;
		this.lastMaintenanceDate = lastMaintenanceDate;
		this.bookings = bookings;
		this.carImageLink = carImageLink;
	}

	public Long getCarId() {
		return carId;
	}

	public void setCarId(Long carId) {
		this.carId = carId;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getLicensePlate() {
		return licensePlate;
	}

	public void setLicensePlate(String licensePlate) {
		this.licensePlate = licensePlate;
	}

	public double getMileage() {
		return mileage;
	}

	public void setMileage(double mileage) {
		this.mileage = mileage;
	}

	public String getFuelType() {
		return fuelType;
	}

	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}

	public String getTransmissionType() {
		return transmissionType;
	}

	public void setTransmissionType(String transmissionType) {
		this.transmissionType = transmissionType;
	}

	public int getSeatingCapacity() {
		return seatingCapacity;
	}

	public void setSeatingCapacity(int seatingCapacity) {
		this.seatingCapacity = seatingCapacity;
	}

	public double getDailyRentalRate() {
		return dailyRentalRate;
	}

	public void setDailyRentalRate(double dailyRentalRate) {
		this.dailyRentalRate = dailyRentalRate;
	}

	public boolean isAvailable() {
		return available;
	}

	public void setAvailable(boolean available) {
		this.available = available;
	}

	public LocalDate getLastMaintenanceDate() {
		return lastMaintenanceDate;
	}

	public void setLastMaintenanceDate(LocalDate lastMaintenanceDate) {
		this.lastMaintenanceDate = lastMaintenanceDate;
	}
	
	public String getCarImageLink() {
		return carImageLink;
	}

	public void setCarImageLink(String carImageLink) {
		this.carImageLink = carImageLink;
	}

	public List<CarImage> getCarImages() {
		return carImages;
	}

	public void setCarImages(List<CarImage> carImages) {
		this.carImages = carImages;
	}

	public List<Booking> getBookings() {
		return bookings;
	}

	public void setBookings(List<Booking> bookings) {
		this.bookings = bookings;
	}

	@Override
	public String toString() {
		return "Car [carId=" + carId + ", model=" + model + ", licensePlate=" + licensePlate + ", mileage=" + mileage
				+ ", fuelType=" + fuelType + ", transmissionType=" + transmissionType + ", seatingCapacity="
				+ seatingCapacity + ", dailyRentalRate=" + dailyRentalRate + ", available=" + available
				+ ", lastMaintenanceDate=" + lastMaintenanceDate + ", carImageLink=" + carImageLink + ", bookings="
				+ bookings + ", carImages=" + carImages + "]";
	}

}
