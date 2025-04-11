import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { CartComponent } from './Cart/Cart.component';
import { FormsModule } from '@angular/forms'; 



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    FormsModule   

  ],
  exports: [
    CartComponent  
  ]
})
export class ShoppingCartModule { }
