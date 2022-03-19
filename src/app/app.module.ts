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
import { CommonModule } from '@angular/common';
import { catModalContent } from './catmodal';
import { PricesComponent } from './prices/prices.component';
import { OrdersComponent } from './orders/orders.component';

import { OrdersPipe } from './orders.pipe';
import { LatestusersComponent } from './latestusers/latestusers.component';
import { urldecodePipe, UsersearchsComponent } from './usersearchs/usersearchs.component';

const appRoutes: Routes = [



  { path: 'products', component: ProductsComponent , canActivate:[AuthService]},
  
  { path: 'categories/:parentid', component: CategoriesComponent , canActivate:[AuthService]},

  { path: 'prices', component: PricesComponent , canActivate:[AuthService]},

  { path: 'orders', component: OrdersComponent , canActivate:[AuthService]},

  { path: 'latestusers', component: LatestusersComponent , canActivate:[AuthService]},

  { path: 'usersearchs', component: UsersearchsComponent , canActivate:[AuthService]},
  
 // { path: 'login', component: LoginComponent},


];


@NgModule({
  declarations: [
    catModalContent,AppComponent,AddbeforePipe,urldecodePipe,ProductsComponent, CategoriesComponent, PricesComponent, OrdersComponent, OrdersPipe, LatestusersComponent,  UsersearchsComponent
  ],
  imports: [
    CommonModule,
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
