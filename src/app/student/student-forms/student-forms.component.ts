import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { student } from '../models/student.model';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-forms',
  templateUrl: './student-forms.component.html',
  styleUrls: ['./student-forms.component.css']
})
export class StudentFormsComponent implements OnInit {
  student?: student;

  constructor(private serivce: StudentService) { }

  ngOnInit(): void {
    this.serivce.studentId$.subscribe(id => {
      if (id == 0) {
        this.student = {} as student;
      } else {
        this.serivce.getStudent(id).subscribe(data => {
          this.student = data;
        })
      }
    });
  }
    
 
  public submit() {
    if (this.student) {
      this.serivce.saveStudent(this.student).subscribe(data => {
        this.serivce.reloadList();
        this.serivce.action = 'list';
        console.log('student added/updated successfully');
      });
    }
  }


}
