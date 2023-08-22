package com.app.vehiclerent.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;

@ControllerAdvice
public class RestControllerExceptionHandlerImpl {
    
    @ExceptionHandler({RuntimeException.class})
    public ResponseEntity<?> handleRunTimeException(RuntimeException ex) {
        var map = new HashMap<String, Object>();
        map.put("status", "error");
        map.put("error", ex.getMessage());
        return ResponseEntity.ok(map);
    }
}
