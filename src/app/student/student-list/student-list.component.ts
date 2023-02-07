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

    this.service.getStudents()
    .subscribe(data=>{
      this.students=data;
    });

    this.service.reload$.subscribe(data => {
      if (data) {
        this.service.getStudents()
          .subscribe(data => {
            this.students= data;
          });
  }
});

  
  //   this.students=[{sName:'abc',sId:501,sClass:'CSE',gender:'female'},
  // {sName:'def',sId:502,sClass:'EEE',gender:'male'},
  // {sName:'ghi',sId:503,sClass:'ECE',gender:'female'},
  // {sName:'jkl',sId:504,sClass:'CSE',gender:'male'},
  // {sName:'mno',sId:505,sClass:'EEE',gender:'female'}];
  }


addStudent() {
    this.service.action="add";
    this.service.selectStudent(0);
  }

  view(student: student) {
    this.service.action = "view";
    this.service.selectStudent(student.sId);

  }
  edit(student: student) {
    this.service.action = "edit";
    this.service.selectStudent(student.sId);
  }
  }
