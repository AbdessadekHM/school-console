import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentsComponent } from './list-students/list-students.component';
import { provideRouter, Routes } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path: "", component: StudentFormComponent},
  
]

@NgModule({
  declarations: [
    ListStudentsComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [provideRouter(routes)],
})
export class StudentModule { }
