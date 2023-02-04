import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  action?: string;
  private employeeId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private reload: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  get employeeId$() {
    return this.employeeId.asObservable();
  }

  get reload$() {
    return this.reload.asObservable();
  }

  getEmployees() {
    return this.http.get<Employee[]>('https://localhost:7036/Employee');
  }

  getEmployee(id?: number) {
    return this.http.get<Employee>(`https://localhost:7036/Employee/${id}`);
  }

  saveEmployee(employee: Employee) {
    return this.http.post('https://localhost:7036/Employee', employee);
  }

  selectEmployee(employeeId: number) {
    this.employeeId.next(employeeId);
  }

  reloadList() {
    this.reload.next(true);
  }
}
