package com.example.payrollsystem.dto;

public class PayrollRunRequest {
    private Long employeeId;
    private int year;
    private int month;
    private double totalPay;  // optional, if you want to specify total pay

    // getters and setters
    public Long getEmployeeId() { return employeeId; }
    public void setEmployeeId(Long employeeId) { this.employeeId = employeeId; }

    public int getYear() { return year; }
    public void setYear(int year) { this.year = year; }

    public int getMonth() { return month; }
    public void setMonth(int month) { this.month = month; }

    public double getTotalPay() { return totalPay; }
    public void setTotalPay(double totalPay) { this.totalPay = totalPay; }
}
