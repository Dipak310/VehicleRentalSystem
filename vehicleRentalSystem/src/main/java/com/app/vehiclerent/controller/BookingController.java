package com.app.vehiclerent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.vehiclerent.entity.Booking;
import com.app.vehiclerent.service.BookingService;

@RestController
@CrossOrigin
@RequestMapping("/bookings")
public class BookingController {
    
    @Autowired
    private BookingService bookingService;
    
    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }
    
    @GetMapping("/{id}")
    public Booking getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id);
    }
    
    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.createBooking(booking);
    }
    
    @PutMapping("/{id}")
    public Booking updateBooking(@PathVariable Long id, @RequestBody Booking booking) {
        return bookingService.updateBooking(id, booking);
    }
    
    @GetMapping("/customer/{customerId}")
    public List<Booking> getBookingsByCustomerId(@PathVariable Long customerId) {
        return bookingService.getBookingsByCustomerId(customerId);
    }
    
    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
    }
    
    @GetMapping("/rentalDays/{id}")
    public int calculateRentalDays(@PathVariable Long id) {
    	Booking b = bookingService.getBookingById(id);
    	int rentDays = bookingService.calculateRentalDays(b);
    	return rentDays;
    }
    
    @GetMapping("/totalAmount/{id}")
    public double calculateTotalAmount(@PathVariable Long id) {
    	Booking b = bookingService.getBookingById(id);
    	double totalAmt = bookingService.calculateTotalAmount(b);
    	return totalAmt;
    }
    
    @PatchMapping("/{id}/updateTotalAmount")
    public ResponseEntity<String> updateTotalAmount(@PathVariable Long id) {
        Booking booking = bookingService.getBookingById(id);
        if (booking == null) {
            return new ResponseEntity<>("Booking not found", HttpStatus.NOT_FOUND);
        }
        
        double totalAmount = bookingService.calculateTotalAmount(booking);
        booking.setTotalAmount(totalAmount);
        bookingService.updateBooking(id, booking);
        
        return new ResponseEntity<>("Total amount updated successfully", HttpStatus.OK);
    }
}