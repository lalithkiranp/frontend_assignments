package com.example.payrollsystem.repositories;

import com.example.payrollsystem.entities.PayrollRun;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PayrollRunRepository extends JpaRepository<PayrollRun, Long> {
}
