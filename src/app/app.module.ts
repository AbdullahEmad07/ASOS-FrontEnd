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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
