import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { provideRouter, Router, RouterModule, Routes } from '@angular/router';
import { StudentModule } from './feature/student/student.module';
import { ListStudentsComponent } from './feature/student/list-students/list-students.component';


const routes: Routes = [
  
  {path: 'students', component: ListStudentsComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
