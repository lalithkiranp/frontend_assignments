package com.example.payrollsystem.repositories;

import com.example.payrollsystem.entities.PayrollItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PayrollItemRepository extends JpaRepository<PayrollItem, Long> {

    // Use the correct property name of PayrollRun entity
    List<PayrollItem> findByPayrollRun_PayrollRunId(Long payrollRunId);

    List<PayrollItem> findByEmployee_EmployeeIdAndPayrollRun_YearAndPayrollRun_Month(
        Long employeeId, int year, int month
    );
}
