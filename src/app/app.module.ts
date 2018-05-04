import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //added for forms
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // added for animations


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //added for forms
    BrowserAnimationsModule, AppRoutingModule // added for animations
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
