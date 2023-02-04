import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee?: Employee;
  constructor(public service: EmployeeService) { }

  ngOnInit(): void {
    this.service.employeeId$.subscribe(id => {
      this.service.getEmployee(id).subscribe(data => {
        this.employee = data;
      })
    });
  }
}
