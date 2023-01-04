import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title = 'ems';

  constructor(public service: EmployeeService) { }

  ngOnInit(): void {
  }

  employeeAdded(value: any) {
    alert(value);
  }
}
