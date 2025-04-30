import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentsComponent } from './list-students/list-students.component';
import { provideRouter, Routes } from '@angular/router';


const routes: Routes = [
  {path: "", component: ListStudentsComponent},
  
]

@NgModule({
  declarations: [
    ListStudentsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [provideRouter(routes)],
})
export class StudentModule { }
