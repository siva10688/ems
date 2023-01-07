import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  action?: string;
  private employee: BehaviorSubject<Employee> = new BehaviorSubject<Employee>({} as Employee  );

  constructor() { }

  get employee$() {
    return this.employee.asObservable();
  }

  updateEmployee(employee: Employee) {
    this.employee.next(employee);
  }
}
