import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee/services/employee.service';



@Component({
  selector: 'app-employee-forms',
  templateUrl: './employee-forms.component.html',
  styleUrls: ['./employee-forms.component.css']
})
export class EmployeeFormsComponent implements OnInit {
  employeeForm: NgForm;

  constructor(private service: EmployeeService) {
    this.employeeForm = <NgForm>{ value: this.service.employee };
  }

  ngOnInit(): void {
  }


  public submit(formdata: any) {
    alert(JSON.stringify(formdata));
  }
}
