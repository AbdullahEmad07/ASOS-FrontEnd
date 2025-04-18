import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Profile/Profile.component';
import { UserOrdersComponent } from '../Components/user-orders/user-orders.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      },
      {
        path: 'info',
        component: UserInfoComponent
      },
      {
        path: 'orders',
        component: UserOrdersComponent
      },
      {
        path: 'wishlist',
        loadChildren: () => import('../wish-list/wish-list.module').then(m => m.WishListModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
