package com.app.vehiclerent.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "cancellation")
public class Cancellation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cancellation_id")
    private Long cancellationId;

    @ManyToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;

    @Column(name = "cancellation_date")
    private LocalDateTime cancellationDate;

    @Column(name = "reason")
    private String reason;

    @Column(name = "additional_comments")
    private String additionalComments;

    public Cancellation() {
        // Default constructor
    }

    public Cancellation(Booking booking, LocalDateTime cancellationDate, String reason, String additionalComments) {
        this.booking = booking;
        this.cancellationDate = cancellationDate;
        this.reason = reason;
        this.additionalComments = additionalComments;
    }

    public Long getCancellationId() {
        return cancellationId;
    }

    public void setCancellationId(Long cancellationId) {
        this.cancellationId = cancellationId;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }

    public LocalDateTime getCancellationDate() {
        return cancellationDate;
    }

    public void setCancellationDate(LocalDateTime cancellationDate) {
        this.cancellationDate = cancellationDate;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getAdditionalComments() {
        return additionalComments;
    }

    public void setAdditionalComments(String additionalComments) {
        this.additionalComments = additionalComments;
    }

    @Override
    public String toString() {
        return "Cancellation{" +
                "cancellationId=" + cancellationId +
                ", booking=" + booking +
                ", cancellationDate=" + cancellationDate +
                ", reason='" + reason + '\'' +
                ", additionalComments='" + additionalComments + '\'' +
                '}';
    }
}
