import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddproductComponent}from '../app/components/addproduct/addproduct.component'
import {OderComponent} from '../app/components/order/order.component'
import {AddminOrderComponent} from '../app/components/addmin-order/addmin-order.component'
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductComponent }from './components/product/product.component';
import { BrowserModule } from '@angular/platform-browser'
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { AddminComponent } from './components/addmin/addmin.component';

import { ShowroomsComponent } from './components/showrooms/showrooms.component';

const routes: Routes = [
  {path:'addproduct',component:AddproductComponent},
  {path: 'showproducts', component: ShowroomsComponent },
  {path:'order',component:OderComponent},
  {path:'admin',component:AddminOrderComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'profile',component:ProfileComponent},
  {path:'product',component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path: 'home',component:HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
