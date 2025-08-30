package com.example.payrollsystem.controllers;

import com.example.payrollsystem.entities.PayrollItem;
import com.example.payrollsystem.services.PayrollItemService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/payroll/items")
public class PayrollItemController {

    private final PayrollItemService payrollItemService;

    public PayrollItemController(PayrollItemService payrollItemService) {
        this.payrollItemService = payrollItemService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/run/{runId}")
    public ResponseEntity<List<PayrollItem>> getByRun(@PathVariable Long runId) {
        return ResponseEntity.ok(payrollItemService.getItemsByRunId(runId));
    }

    @PreAuthorize("hasRole('EMPLOYEE')")
    @GetMapping("/my/{employeeId}/{year}/{month}")
    public ResponseEntity<List<PayrollItem>> getForEmployee(@PathVariable Long employeeId,
                                                            @PathVariable int year,
                                                            @PathVariable int month) {
        return ResponseEntity.ok(payrollItemService.getItemsForEmployee(employeeId, year, month));
    }
}
