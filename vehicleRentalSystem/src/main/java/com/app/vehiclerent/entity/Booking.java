package com.app.vehiclerent.entity;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long bookingId;

	@ManyToOne
	@JoinColumn(name = "customer_id")
	private Customer customer;

	@ManyToOne
	@JoinColumn(name = "car_id")
	private Car car;
	
	@OneToMany(mappedBy = "booking", cascade = CascadeType.ALL)
    private List<Cancellation> cancellations;

	private LocalDateTime pickupDate;
	private LocalDateTime returnDate;
	private double totalAmount;
	private String status;

	@OneToMany(mappedBy = "booking", cascade = CascadeType.ALL)
	private List<Payment> payments;

	@OneToMany(mappedBy = "booking", cascade = CascadeType.ALL)
	private List<Invoice> invoices;

	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	@OneToOne(mappedBy = "booking", cascade = CascadeType.ALL)
	private Feedback feedback;

	public Booking(Long bookingId, Customer customer, Car car, LocalDateTime pickupDate, LocalDateTime returnDate,
			double totalAmount, String status, List<Payment> payments, List<Invoice> invoices, Feedback feedback) {
		super();
		this.bookingId = bookingId;
		this.customer = customer;
		this.car = car;
		this.pickupDate = pickupDate;
		this.returnDate = returnDate;
		this.totalAmount = totalAmount;
		this.status = status;
		this.payments = payments;
		this.invoices = invoices;
		this.feedback = feedback;
	}

	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Car getCar() {
		return car;
	}

	public void setCar(Car car) {
		this.car = car;
	}

	public LocalDateTime getPickupDate() {
		return pickupDate;
	}

	public void setPickupDate(LocalDateTime pickupDate) {
		this.pickupDate = pickupDate;
	}

	public LocalDateTime getReturnDate() {
		return returnDate;
	}

	public void setReturnDate(LocalDateTime returnDate) {
		this.returnDate = returnDate;
	}

	public double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<Payment> getPayments() {
		return payments;
	}

	public void setPayments(List<Payment> payments) {
		this.payments = payments;
	}

	public List<Invoice> getInvoices() {
		return invoices;
	}

	public void setInvoices(List<Invoice> invoices) {
		this.invoices = invoices;
	}

	public Feedback getFeedback() {
		return feedback;
	}

	public void setFeedback(Feedback feedback) {
		this.feedback = feedback;
	}

	@Override
	public String toString() {
		return "Booking [bookingId=" + bookingId + ", customer=" + customer + ", car=" + car + ", pickupDate="
				+ pickupDate + ", returnDate=" + returnDate + ", totalAmount=" + totalAmount + ", status=" + status
				+ ", payments=" + payments + ", invoices=" + invoices + ", feedback=" + feedback + "]";
	}

}
