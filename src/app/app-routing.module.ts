import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './practice/data-binding/data-binding.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
