import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Cart/Cart.component';

const routes: Routes = [
  {path:'', redirectTo:"cart", pathMatch: 'full'},
  {path:"cart" , component:CartComponent , title: "Shopping Cart"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
