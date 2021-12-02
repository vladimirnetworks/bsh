import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddbeforePipe } from './addbefore.pipe';

@NgModule({
  declarations: [
    AppComponent,AddbeforePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [ApiService],

  bootstrap: [AppComponent],

})
export class AppModule { }
