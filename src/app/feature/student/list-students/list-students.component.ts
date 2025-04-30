import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../core/services/student.service";
import { Student } from '../../../core/models/student.module';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  standalone: false,
})
export class ListStudentsComponent implements OnInit{

  students!: Student[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  delete(id: number) {
    this.studentService.deleteStudent(id);
  }
}
