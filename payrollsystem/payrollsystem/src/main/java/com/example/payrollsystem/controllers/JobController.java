package com.example.payrollsystem.controllers;

import com.example.payrollsystem.dto.JobRequest;
import com.example.payrollsystem.entities.Job;
import com.example.payrollsystem.services.JobService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/jobs")
public class JobController {

    private final JobService jobService;

    public JobController(JobService jobService) { this.jobService = jobService; }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<?> create(@RequestBody JobRequest req) {
        Job job = new Job();
        job.setTitle(req.getTitle());
        job.setDescription(req.getDescription());
        Job saved = jobService.create(job);
        return ResponseEntity.ok(saved);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public ResponseEntity<List<Job>> list() {
        return ResponseEntity.ok(jobService.listAll());
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody JobRequest req) {
        try {
            Job updated = new Job();
            updated.setTitle(req.getTitle());
            updated.setDescription(req.getDescription());
            return ResponseEntity.ok(jobService.update(id, updated));
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        jobService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
