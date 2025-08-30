package com.example.payrollsystem.entities;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "payroll_items")
public class PayrollItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long payrollItemId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "payroll_run_id", nullable = false)
    private PayrollRun payrollRun;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id", nullable = false)
    private com.example.payrollsystem.entities.Employee employee;

    @Column(nullable = false)
    private Double basicSalary;

    @Column(nullable = false)
    private Double deductions = 0.0;

    @Column(nullable = false)
    private Double bonus = 0.0;

    @Column(nullable = false)
    private Double netSalary;

    @Column(nullable = false)
    private LocalDate payDate;

    // Getters & Setters
    public Long getPayrollItemId() { return payrollItemId; }
    public void setPayrollItemId(Long payrollItemId) { this.payrollItemId = payrollItemId; }

    public PayrollRun getPayrollRun() { return payrollRun; }
    public void setPayrollRun(PayrollRun payrollRun) { this.payrollRun = payrollRun; }

    public com.example.payrollsystem.entities.Employee getEmployee() { return employee; }
    public void setEmployee(com.example.payrollsystem.entities.Employee employee) { this.employee = employee; }

    public Double getBasicSalary() { return basicSalary; }
    public void setBasicSalary(Double basicSalary) { this.basicSalary = basicSalary; }

    public Double getDeductions() { return deductions; }
    public void setDeductions(Double deductions) { this.deductions = deductions; }

    public Double getBonus() { return bonus; }
    public void setBonus(Double bonus) { this.bonus = bonus; }

    public Double getNetSalary() { return netSalary; }
    public void setNetSalary(Double netSalary) { this.netSalary = netSalary; }

    public LocalDate getPayDate() { return payDate; }
    public void setPayDate(LocalDate payDate) { this.payDate = payDate; }
}
