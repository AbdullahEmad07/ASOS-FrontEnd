import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishListRoutingModule } from './wish-list-routing.module';
import { WishListComponent } from './WishList/WishList.component';


@NgModule({
  declarations: [
    WishListComponent
  ],
  imports: [
    CommonModule,
    WishListRoutingModule
  ]
})
export class WishListModule { }
