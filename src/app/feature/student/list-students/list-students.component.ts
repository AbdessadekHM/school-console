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
  isEditing: boolean = false;
  isModalOpen: boolean = false;

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  delete(id: number) {
    this.studentService.deleteStudent(id);
  }

  openEditForm(student: Student) {
    this.isEditing = true;
//    this.studentService.setStudentToEdit(student);
  }
  closeEditForm() {
    this.isEditing = false;
  }



  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  handleStudentFormSubmit(formData?: any) {
    if (formData) {
      console.log('Student form submitted:', formData);
      this.closeModal();
    }
  }

}
