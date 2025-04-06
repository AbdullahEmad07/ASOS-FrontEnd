import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'shopping-cart', loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)  },
  { path: 'wish-list',  loadChildren: () => import('./wish-list/wish-list.module').then(m => m.WishListModule) },
  { path: 'Profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
