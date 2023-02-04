import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './practice/data-binding/data-binding.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { CustomLowerCasePipe } from './practice/pipes/custom-lower.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { TestDirectivesComponent } from './practice/directives/test-directives/test-directives.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { EmployeeFormsComponent } from './employee/employee-forms/employee-forms.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    EmployeeListComponent,
    CustomLowerCasePipe,
    EmployeeComponent,
    EmployeeDetailsComponent,
    TestDirectivesComponent,
    StudentComponent,
    StudentListComponent,
    StudentDetailsComponent,
    HomeComponent,
    ErrorComponent,
    EmployeeFormsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
