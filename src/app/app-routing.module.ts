import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentsComponent } from './feature/student/list-students/list-students.component';
import { StudentModule } from './feature/student/student.module';

const routes: Routes = [
  
  {path: 'students', component: StudentModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
