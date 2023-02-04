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
    this.service.getEmployees()
      .subscribe(data => {
        this.employees = data;
      });

    this.service.reload$.subscribe(data => {
      if (data) {
        this.service.getEmployees()
          .subscribe(data => {
            this.employees = data;
          });
      }
    });
    // this.employees = [{ id: 1, EName: 'raju', EAddress: 'gnt', salary: 40000, EMobilenumber: 9876543210 ,Dept1:'pqr'},
    //  { id: 2, EName: 'anjani', EAddress: 'HYD', salary: 50000, EMobilenumber: 4567890321,Dept1:'pqr' },
    // { id: 3, EName: 'vikky', EAddress: 'NRT', salary: 45000, EMobilenumber: 1234356768 ,Dept1:'xyz'},
    //  { id: 4, EName: 'sai', EAddress: 'hyd', salary: 43000, EMobilenumber: 5432109876,Dept1:'abc' },
    //  { id: 5, EName: 'eswar', EAddress: 'cpt', salary: 34000, EMobilenumber: 4531678904,Dept1:'abc' },
    //  { id: 6, EName: 'nidi', EAddress: 'gnt1', salary: 23000, EMobilenumber: 7864321906,Dept1:'xyz' },
    //  { id: 7, EName: 'pooji', EAddress: 'gnt2', salary: 27000, EMobilenumber: 786443569,Dept1:'def' },
    //  { id: 8, EName: 'dimpu', EAddress: 'gnt', salary: 29000, EMobilenumber: 7864377658,Dept1:'pqr' },
    //  { id: 9, EName: 'lucky', EAddress: 'nrt', salary: 25000, EMobilenumber: 7990754334,Dept1:'pqr' },
    //  { id: 10, EName: 'venkat', EAddress: 'gnt3', salary: 21000, EMobilenumber: 767543890,Dept1:'abc' }];
  }

  addEmployee() {
    this.service.action = "add";
    this.service.selectEmployee(0)
  }

  view(employee: Employee) {
    this.service.action = "view";
    this.service.selectEmployee(employee.id);
  }

  edit(employee: Employee) {
    this.service.action = "edit";
    this.service.selectEmployee(employee.id);
  }
}


