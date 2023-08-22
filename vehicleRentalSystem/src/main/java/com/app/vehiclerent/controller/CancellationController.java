package com.app.vehiclerent.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.app.vehiclerent.entity.Cancellation;
import com.app.vehiclerent.service.CancellationService;

import java.util.List;

@RestController
@RequestMapping("/cancellations")
public class CancellationController {

    private final CancellationService cancellationService;

    @Autowired
    public CancellationController(CancellationService cancellationService) {
        this.cancellationService = cancellationService;
    }

    @GetMapping
    public List<Cancellation> getAllCancellations() {
        return cancellationService.getAllCancellations();
    }

    @GetMapping("/{id}")
    public Cancellation getCancellationById(@PathVariable Long id) {
        return cancellationService.getCancellationById(id);
    }

    @PostMapping
    public Cancellation createCancellation(@RequestBody Cancellation cancellation) {
        return cancellationService.createCancellation(cancellation);
    }

    @PutMapping("/{id}")
    public Cancellation updateCancellation(@PathVariable Long id, @RequestBody Cancellation cancellation) {
        return cancellationService.updateCancellation(id, cancellation);
    }

    @DeleteMapping("/{id}")
    public void deleteCancellation(@PathVariable Long id) {
        cancellationService.deleteCancellation(id);
    }
    
    @GetMapping("/refund/{id}")
    public double processRefund(@PathVariable Long id) {
    	Cancellation cancellation = cancellationService.getCancellationById(id);
        return cancellationService.processRefund(cancellation);
    }
}
