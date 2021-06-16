import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { SigninComponent } from './components/signin/signin.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AddminOrderComponent } from './components/addmin-order/addmin-order.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: 'addproduct', component: AddproductComponent },
  { path: 'showproducts', component: ShowproductsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  {path:'addproduct',component:AddproductComponent},
  {path:'order',component:OrderComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'users',component:AdduserComponent},
  {path:'admin',component:AddminOrderComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}