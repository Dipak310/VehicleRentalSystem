package com.app.vehiclerent.service;

import com.app.vehiclerent.entity.Booking;
import com.app.vehiclerent.entity.Cancellation;

import java.time.LocalDateTime;
import java.util.List;

public interface CancellationService {

    List<Cancellation> getAllCancellations();

    Cancellation getCancellationById(Long id);

    Cancellation createCancellation(Cancellation cancellation);

    Cancellation updateCancellation(Long id, Cancellation cancellation);

    void deleteCancellation(Long id);
    
    double processRefund(Cancellation cancellation);
    
    double calculateRefundAmount(LocalDateTime cancellationDate, Booking booking);
}
