package com.example.payrollsystem.controllers;

import com.example.payrollsystem.dto.PayrollRunRequest;
import com.example.payrollsystem.entities.PayrollRun;
import com.example.payrollsystem.services.PayrollRunService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/payroll-runs")
public class PayrollRunController {

    private final PayrollRunService payrollRunService;

    public PayrollRunController(PayrollRunService payrollRunService) {
        this.payrollRunService = payrollRunService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<?> create(@RequestBody PayrollRunRequest request) {
        PayrollRun pr = payrollRunService.create(request);
        return ResponseEntity.ok(pr);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public ResponseEntity<List<PayrollRun>> listAll() {
        return ResponseEntity.ok(payrollRunService.listAll());
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        return payrollRunService.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}
