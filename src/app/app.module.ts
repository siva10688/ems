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
import { StudentComponent } from './student/student/student.component';
import { StudentListComponent } from './student/student/student-list/student-list.component';
import { StudentDetailsComponent } from './student/student/student-details/student-details.component';

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
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
