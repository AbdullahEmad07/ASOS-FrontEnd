import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent} from './Components/Home/Home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/Register/Register.component';
import { MenComponent } from './Components/Men/Men.component';
import { WomenComponent } from './Components/Women/Women.component';
import { MAccessoriesComponent } from './Components/M-Accessories/M-Accessories.component';
import { MShoesComponent } from './Components/M-Shoes/M-Shoes.component';
import { MClothingComponent } from './Components/M-clothing/M-clothing.component';
import { MNewInComponent } from './Components/M-NewIn/M-NewIn.component';
import { MBrandsComponent } from './Components/M-Brands/M-Brands.component';
import { WAccessoriesComponent } from './Components/W-Accessories/W-Accessories.component';
import { WShoesComponent } from './Components/W-Shoes/W-Shoes.component';
import { WClothingComponent } from './Components/W-Clothing/W-Clothing.component';
import { WNewInComponent } from './Components/W-NewIn/W-NewIn.component';
import { WBrandsComponent } from './Components/W-Brands/W-Brands.component';
import { UserOrdersComponent } from './Components/user-orders/user-orders.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductComponent } from './Components/product/product.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenClothingSearchPipe } from './Pipes/men-clothing-search.pipe';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { MenShoesSearchPipe } from './Pipes/men-shoes-search.pipe';
import { MenAccessoriesSearchPipe } from './Pipes/men-accessories-search.pipe';
import { WomenClothingSearchPipe } from './Pipes/women-clothing-search.pipe';
import { WomenShoesSearchPipe } from './Pipes/women-shoes-search.pipe';
import { WomenAccessoriesSearchPipe } from './Pipes/women-accessories-search.pipe';   
import { NgxPaginationModule } from 'ngx-pagination';
import { SliderComponent } from './Components/slider/slider.component';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { MBrandProductsComponent } from './Components/mbrand-products/mbrand-products.component';
import { WBrandProductsComponent } from './Components/wbrand-products/wbrand-products.component';
import { ToastrModule } from 'ngx-toastr';
import { OrderComponent } from './order/order/order.component';  // Keep consistent casing
import { CommonModule } from '@angular/common';  // Add this import
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MenComponent,
    WomenComponent,
    MAccessoriesComponent,
    MShoesComponent,
    MClothingComponent,
    MNewInComponent,
    MBrandsComponent,
    WAccessoriesComponent,
    WShoesComponent,
    WClothingComponent,
    WNewInComponent,
    WBrandsComponent,
    UserOrdersComponent,
    ProductComponent,
    ProfileComponent,
    MenClothingSearchPipe,
    MenShoesSearchPipe,
    MenAccessoriesSearchPipe,
    WomenClothingSearchPipe,
    WomenShoesSearchPipe,
    WomenAccessoriesSearchPipe,
    SliderComponent,
    SingleProductComponent,
    MBrandProductsComponent,
    WBrandProductsComponent,
    OrderComponent,
    PaymentComponent,  // Add this
  ],
  imports: [
    BrowserModule,
    CommonModule,  // Add this
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    ShoppingCartModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({timeOut:1500 , positionClass: 'toast-bottom-right'}), // ToastrModule added

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
