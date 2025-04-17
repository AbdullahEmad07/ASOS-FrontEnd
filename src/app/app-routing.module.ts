import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './Components/Home/Home.component';
import { MenComponent } from './Components/Men/Men.component';
import { WomenComponent } from './Components/Women/Women.component';
import { MClothingComponent } from './Components/M-clothing/M-clothing.component';
import { MShoesComponent } from './Components/M-Shoes/M-Shoes.component';
import { MBrandsComponent } from './Components/M-Brands/M-Brands.component';
import { WClothingComponent } from './Components/W-Clothing/W-Clothing.component';
import { WShoesComponent } from './Components/W-Shoes/W-Shoes.component';
import { WAccessoriesComponent } from './Components/W-Accessories/W-Accessories.component';
import { WBrandsComponent } from './Components/W-Brands/W-Brands.component';
import { MAccessoriesComponent } from './Components/M-Accessories/M-Accessories.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/Register/Register.component';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { MBrandProductsComponent } from './Components/mbrand-products/mbrand-products.component';
import { WBrandProductsComponent } from './Components/wbrand-products/wbrand-products.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order/order.component';  // Updated casing
import { UserOrdersComponent } from './Components/user-orders/user-orders.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  { path: 'home', component: HomeComponent,title: 'Home' },
  {path: "men" , component:MenComponent , title: "Men Section"},
  {path:"women" , component:WomenComponent,title:"Women Section"},
  {path:"men-clothing" , component: MClothingComponent , title:"Men Clothing"},
  {path:"men-shoes" , component: MShoesComponent , title:"Men Shoes"},
  {path:"men-accessories" , component: MAccessoriesComponent , title:"Men Accessories"},
  {path:"men-brands" , component:MBrandsComponent , title : "Men Brands"},
  {path:"m-brand-products/:brandName" , component:MBrandProductsComponent , title : "Brand Products"},
  {path:"women-clothing" , component: WClothingComponent , title:"Women Clothing"},
  {path:"women-shoes" , component: WShoesComponent , title:"Women Shoes"},
  {path:"women-accessories" , component: WAccessoriesComponent , title:"Women Accessories"},
  {path:"women-brands" , component:WBrandsComponent , title : "Women Brands"},
  {path:"w-brand-products/:brandName" , component:WBrandProductsComponent , title : "Brand Products"},
  {path:"single-product/:productId/:productName" , component:SingleProductComponent , title : "Product Details"},
  {path:"login" , component:LoginComponent , title: "Login" },
  {path:"register" , component:RegisterComponent , title: "Register"},
  { path: 'order', component: OrderComponent , title:"Check out" },
  { path: 'payment', component: PaymentComponent },
  { path: 'user-orders', component: UserOrdersComponent, title: 'My Orders xxx' },  // Updated route
  
  { path: 'shopping-cart', loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) },
  { path: 'wish-list',  loadChildren: () => import('./wish-list/wish-list.module').then(m => m.WishListModule) },
  { path: 'Profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
