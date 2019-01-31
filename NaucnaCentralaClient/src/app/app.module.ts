import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CasopisComponent } from './home/casopis/casopis.component';
import { RadComponent } from './home/rad/rad.component';
import { HomeService } from './home/home.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CasopisComponent,
    RadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    CommonModule,
    RouterModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
