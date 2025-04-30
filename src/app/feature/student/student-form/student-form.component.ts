import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
  address: string;
  phoneNumber: string;
  email: string;
}

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
})
export class StudentFormComponent implements OnInit {
  studentForm!: FormGroup;
  @Output() formSubmit = new EventEmitter<any>();
  @Input() currentStudent: Student | null = null;

  constructor(private fb: FormBuilder) {
  }


  ngOnInit(): void {
    console.log({currentStudent: this.currentStudent})
    this.studentForm = this.fb.group({
      id: [this.currentStudent != null ? this.currentStudent.id : 0, [Validators.required, Validators.min(1)]],
      name: [this.currentStudent != null ? this.currentStudent.name : '', [Validators.required, Validators.minLength(2)]],
      age: [this.currentStudent != null ? this.currentStudent.age : 0, [Validators.required, Validators.min(1), Validators.max(120)]],
      grade: [this.currentStudent != null ? this.currentStudent.grade : '', [Validators.required]],
      address: [this.currentStudent != null ? this.currentStudent.address : '', [Validators.required]],
      phoneNumber: [this.currentStudent != null ? this.currentStudent.phoneNumber : '', [Validators.required, Validators.pattern(/^\+?[\d\s-]{10,}$/)]],
      email: [this.currentStudent != null ? this.currentStudent.email : '', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const student: Student = this.studentForm.value;
      console.log('Student submitted:', student);
    }
  }
}
