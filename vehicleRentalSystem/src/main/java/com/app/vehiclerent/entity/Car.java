package com.app.vehiclerent.entity;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.*;
import jakarta.persistence.OneToMany;

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

	@OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
	private List<Booking> bookings;

	public Car() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Car(Long carId, String make, String model, int year, String color, String licensePlate, double mileage,
			String fuelType, String transmissionType, int seatingCapacity, double dailyRentalRate, boolean available,
			LocalDate lastMaintenanceDate, List<Booking> bookings) {
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
				+ ", lastMaintenanceDate=" + lastMaintenanceDate + ", bookings=" + bookings + "]";
	}

}
