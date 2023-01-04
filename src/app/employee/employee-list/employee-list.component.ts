import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  @Input() title: string = ''
  @Output() add = new EventEmitter<string>();

  constructor(public service: EmployeeService) { }

  ngOnInit(): void {
    this.employees = [{ id: 1, name: 'raju', address: 'gnt', salary: 40000, mobilenumber: 9876543210 },
    { id: 2, name: 'anjani', address: 'HYD', salary: 50000, mobilenumber: 4567890321 },
    { id: 3, name: 'vikky', address: 'NRT', salary: 45000, mobilenumber: 1234356768 },
    { id: 4, name: 'sai', address: 'hyd', salary: 43000, mobilenumber: 5432109876 },
    { id: 5, name: 'eswar', address: 'cpt', salary: 34000, mobilenumber: 4531678904 },
    { id: 6, name: 'nidi', address: 'gnt1', salary: 23000, mobilenumber: 7864321906 },
    { id: 7, name: 'pooji', address: 'gnt2', salary: 27000, mobilenumber: 786443569 },
    { id: 8, name: 'dimpu', address: 'gnt', salary: 29000, mobilenumber: 7864377658 },
    { id: 9, name: 'lucky', address: 'nrt', salary: 25000, mobilenumber: 7990754334 },
    { id: 10, name: 'venkat', address: 'gnt3', salary: 21000, mobilenumber: 767543890 }];
  }

  addEmployee() {
    this.add.emit("Raju added");
  }

  view(employee: Employee) {
    this.service.action = "view";
    this.service.employee = employee
  }

  edit(employee: Employee) {
    this.service.action = "edit";
    this.service.employee = employee;
  }
}


