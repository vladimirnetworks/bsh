import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddbeforePipe } from './addbefore.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AuthService } from './auth.service';
import { CategoriesComponent } from './categories/categories.component';


const appRoutes: Routes = [



  { path: 'products', component: ProductsComponent , canActivate:[AuthService]},
  
  { path: 'categories', component: CategoriesComponent , canActivate:[AuthService]},

  
 // { path: 'login', component: LoginComponent},


];


@NgModule({
  declarations: [
    AppComponent,AddbeforePipe,ProductsComponent, CategoriesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ) , 


    FormsModule
  ],

  providers: [ApiService],

  bootstrap: [AppComponent],

})
export class AppModule { }
