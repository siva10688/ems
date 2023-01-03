import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { student } from '../models/student.model';
import { StudentService } from '../service/student.service';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students:student[]= [];
  @Input() title:string=''
  @Output() add = new EventEmitter<string>();


  constructor(public service:StudentService) { }

  ngOnInit(): void {
    this.students=[{name:'abc',id:501,branch:'CSE',mobilenumber:9876543211},
  {name:'def',id:502,branch:'EEE',mobilenumber:8765432190},
  {name:'ghi',id:503,branch:'ECE',mobilenumber:9532167095},
  {name:'jkl',id:504,branch:'CSE',mobilenumber:9867432561},
  {name:'mno',id:505,branch:'EEE',mobilenumber:8765904321}];
  }


addStudent() {
    this.add.emit("xyz added");
  }

  viewStudent(student: student) {
    this.service.student = student
  }
  }
