package com.app.vehiclerent.repository;

import com.app.vehiclerent.entity.Cancellation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CancellationRepository extends JpaRepository<Cancellation, Long> {
	
}
