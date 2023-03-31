import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeRegService } from './employee-reg.service';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeRegService],
  bootstrap: [AppComponent]
})
export class AppModule { }
