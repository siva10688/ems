import { Component, OnInit } from '@angular/core';
import { student } from '../models/student.model';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
student?:student;
  constructor( public service:StudentService) { }

  ngOnInit(): void {
    this.service.studentId$.subscribe(id=>
      {
        this.service.getStudent(id).subscribe(data=>
          {
            this.student=data;
          })
      });
  }

}
