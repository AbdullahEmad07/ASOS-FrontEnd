import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishListComponent } from './WishList/WishList.component';

const routes: Routes = [
  {path:'', redirectTo:"wishList", pathMatch: 'full'},
  {path:"wishList", component:WishListComponent , title:"Wish List"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishListRoutingModule { }
