import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { student } from "../models/student.model";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn:'root'
})
export class StudentService{
    action?:string;
    private studentId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    private reload: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    constructor(public http: HttpClient)
    {}
    
      get studentId$() {
        return this.studentId.asObservable();
      }
      get reload$() {
        return this.reload.asObservable();
      }
      getStudents() {
        return this.http.get<student[]>('https://localhost:7036/student');
      }
      getStudent(id? :number)
      {
        return this.http.get<student>(`https://localhost:7036/student/${id}`);
      }
      saveStudent(student : student){
        return this.http.post('https://localhost:7036/student',student);
      }
      selectStudent(studentid:number){
        this.studentId.next(studentid);

      }
      reloadList(){
        this.reload.next(true);
      }
    

    }