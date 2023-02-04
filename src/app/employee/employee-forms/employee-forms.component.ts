import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';



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
    this.service.employeeId$.subscribe(id => {
      if (id == 0) {
        this.employee = {} as Employee;
      } else {
        this.service.getEmployee(id).subscribe(data => {
          this.employee = data;
        })
      }
    });
  }


  public submit() {
    if (this.employee) {
      this.service.saveEmployee(this.employee).subscribe(data => {
        this.service.reloadList();
        this.service.action = 'list';
        console.log('Employee added/updated successfully');
      });
    }
  }
}
