package com.example.payrollsystem.entities;

import jakarta.persistence.*;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "payroll_runs")
public class PayrollRun {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long payrollRunId;

    @Column(nullable = false)
    private int year;

    @Column(nullable = false)
    private int month;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PayrollStatus status = PayrollStatus.CREATED;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id", nullable = false)
    @JsonIgnore
    private Employee employee;
    
    @Column(nullable = false)
    private Double totalPay;

    // Will link to PayrollItem later
    @OneToMany(mappedBy = "payrollRun", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<com.example.payrollsystem.entities.PayrollItem> payrollItems;

    // Getters & Setters
    public Long getPayrollRunId() { return payrollRunId; }
    public void setPayrollRunId(Long payrollRunId) { this.payrollRunId = payrollRunId; }

    public Employee getEmployee() { return employee; }
    public void setEmployee(Employee employee) { this.employee = employee; }
    
    public int getYear() { return year; }
    public void setYear(int year) { this.year = year; }

    public int getMonth() { return month; }
    public void setMonth(int month) { this.month = month; }

    public PayrollStatus getStatus() { return status; }
    public void setStatus(PayrollStatus status) { this.status = status; }
    
    public Double getTotalPay() { return totalPay; }
    public void setTotalPay(Double totalPay) { this.totalPay = totalPay; }

    public List<com.example.payrollsystem.entities.PayrollItem> getPayrollItems() { return payrollItems; }
    public void setPayrollItems(List<com.example.payrollsystem.entities.PayrollItem> payrollItems) { this.payrollItems = payrollItems; }
}
