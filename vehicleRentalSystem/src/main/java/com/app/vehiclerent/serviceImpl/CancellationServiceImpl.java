package com.app.vehiclerent.serviceImpl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.vehiclerent.entity.Booking;
import com.app.vehiclerent.entity.Cancellation;
import com.app.vehiclerent.repository.CancellationRepository;
import com.app.vehiclerent.service.BookingService;
import com.app.vehiclerent.service.CancellationService;

@Service
public class CancellationServiceImpl implements CancellationService {

    @Autowired
    private CancellationRepository cancellationRepository;
    
    @Autowired
    private BookingService bookingService;

    @Override
    public List<Cancellation> getAllCancellations() {
        return cancellationRepository.findAll();
    }

    @Override
    public Cancellation getCancellationById(Long id) {
        return cancellationRepository.findById(id).orElse(null);
    }

    @Override
    public Cancellation createCancellation(Cancellation cancellation) {
        return cancellationRepository.save(cancellation);
    }

    @Override
    public Cancellation updateCancellation(Long id, Cancellation cancellation) {
        if (!cancellationRepository.existsById(id)) {
            return null;
        }
        cancellation.setCancellationId(id);
        return cancellationRepository.save(cancellation);
    }

    @Override
    public void deleteCancellation(Long id) {
        cancellationRepository.deleteById(id);
    }
    
    @Override
    public double processRefund(Cancellation cancellation) {
        LocalDateTime cancellationDate = cancellation.getCancellationDate();
        Booking booking = cancellation.getBooking();

        // Check if the booking can be canceled (before pickupDate)
        if (booking != null && canBeCanceled(booking, cancellationDate)) {
            double refundAmount = calculateRefundAmount(cancellationDate, booking);
            
            // Update the booking status to "Canceled"
            booking.setStatus("Canceled");
            bookingService.updateBooking(booking.getBookingId(), booking);
            return refundAmount;
        } else {
            // Case where the booking cannot be canceled
            throw new IllegalArgumentException("Booking cannot be canceled after pickupDate.");
        }
    }
    
    // Implement the logic to check if a booking can be canceled
    private boolean canBeCanceled(Booking booking, LocalDateTime cancellationDate) {
        LocalDateTime pickupDate = booking.getPickupDate();
        return cancellationDate.isBefore(pickupDate);
    }
    
    @Override
	public double calculateRefundAmount(LocalDateTime cancellationDate, Booking booking) {
        
        double totalAmount = booking.getTotalAmount();
        double refundAmount = 0.9 * totalAmount;
        return refundAmount;
    }
}