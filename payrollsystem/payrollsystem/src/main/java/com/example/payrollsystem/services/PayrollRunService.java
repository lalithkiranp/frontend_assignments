package com.example.payrollsystem.services;

import com.example.payrollsystem.dto.PayrollRunRequest;
import com.example.payrollsystem.entities.Employee;
import com.example.payrollsystem.entities.PayrollRun;
import com.example.payrollsystem.repositories.EmployeeRepository;
import com.example.payrollsystem.repositories.PayrollRunRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PayrollRunService {

    private final PayrollRunRepository payrollRunRepository;
    private final EmployeeRepository employeeRepository;

    public PayrollRunService(PayrollRunRepository payrollRunRepository, EmployeeRepository employeeRepository) {
        this.payrollRunRepository = payrollRunRepository;
        this.employeeRepository = employeeRepository;
    }

    public PayrollRun create(PayrollRunRequest request) {
        Employee emp = employeeRepository.findById(request.getEmployeeId())
                .orElseThrow(() -> new IllegalArgumentException("Employee not found"));

        PayrollRun pr = new PayrollRun();
        pr.setEmployee(emp);
        pr.setYear(request.getYear());
        pr.setMonth(request.getMonth());
        pr.setTotalPay(request.getTotalPay());

        return payrollRunRepository.save(pr);
    }

    public List<PayrollRun> listAll() {
        return payrollRunRepository.findAll();
    }

    public Optional<PayrollRun> findById(Long id) {
        return payrollRunRepository.findById(id);
    }
}
