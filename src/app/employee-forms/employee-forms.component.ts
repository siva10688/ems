import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee/models/employee.model';
import { EmployeeService } from '../employee/services/employee.service';



@Component({
  selector: 'app-employee-forms',
  templateUrl: './employee-forms.component.html',
  styleUrls: ['./employee-forms.component.css']
})
export class EmployeeFormsComponent implements OnInit {
  employee?: Employee;

  constructor(private service: EmployeeService) {
  }

  ngOnInit(): void {
    this.service.employee$.subscribe(employee => {
      if (employee) {
        this.employee = employee;
      }
    })
  }


  public submit() {
    alert(JSON.stringify(this.employee));
  }
}
