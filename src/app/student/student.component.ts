import { Component, OnInit } from '@angular/core';
import { StudentService } from './service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  title='ems';

  constructor(public service:StudentService) { }

  ngOnInit(): void {
  }
  StudentAdded(value:any)
  {
    alert(value);
  }

}
