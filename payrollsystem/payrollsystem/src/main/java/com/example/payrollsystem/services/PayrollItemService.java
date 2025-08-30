package com.example.payrollsystem.services;

import com.example.payrollsystem.entities.PayrollItem;
import com.example.payrollsystem.repositories.PayrollItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PayrollItemService {

    private final PayrollItemRepository payrollItemRepository;

    public PayrollItemService(PayrollItemRepository payrollItemRepository) {
        this.payrollItemRepository = payrollItemRepository;
    }

    public List<PayrollItem> getItemsByRunId(Long runId) {
        return payrollItemRepository.findByPayrollRun_PayrollRunId(runId);
    }

    public List<PayrollItem> getItemsForEmployee(Long employeeId, int year, int month) {
        return payrollItemRepository.findByEmployee_EmployeeIdAndPayrollRun_YearAndPayrollRun_Month(employeeId, year, month);
    }
}
