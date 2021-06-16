import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { OderComponent } from './components/order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ShowroomsComponent } from './components/showrooms/showrooms.component';
import { AddminComponent } from './components/addmin/addmin.component';
import { ContactComponent } from './components/contact/contact.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    
  ],
  declarations: [
    AppComponent,
    AddproductComponent,
    OderComponent,
    SigninComponent,
    SignupComponent,
    ProductComponent,
    CartComponent,
    NavbarComponent,
    HomeComponent,
    ShowroomsComponent,
    AddminComponent,
    ContactComponent
  ],

  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
