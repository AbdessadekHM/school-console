import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { ModalCardComponent } from './shared/components/modal-card/modal-card.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
