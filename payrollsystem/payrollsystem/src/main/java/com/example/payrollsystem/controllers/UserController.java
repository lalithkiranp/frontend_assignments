package com.example.payrollsystem.controllers;

import com.example.payrollsystem.dto.UserRequest;
import com.example.payrollsystem.dto.UserResponse;
import com.example.payrollsystem.entities.User;
import com.example.payrollsystem.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) { this.userService = userService; }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody UserRequest req) {
        try {
            UserResponse resp = userService.createUser(req);
            return ResponseEntity.ok(resp);
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

    @GetMapping("/me")
    public ResponseEntity<?> getMe(@RequestHeader("Authorization") String authHeader) {
        // Basic: parse token and respond with user info (or use principal)
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(401).body("Missing token");
        }
        // For simplicity, use JwtUtil to parse token
        // Alternatively, use SecurityContextHolder
        return ResponseEntity.ok("Use /api/v1/users/me with SecurityContext (will implement later)");
    }
}
