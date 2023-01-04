import { Injectable } from "@angular/core";
import { student } from "../models/student.model";
@Injectable({
    providedIn:'root'
})
export class StudentService{
    student?:student;
    constructor()
    {}
}