import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HomeComponent} from './Component/Home/Home.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/Register/Register.component';
import { MenComponent } from './Component/Men/Men.component';
import { WomenComponent } from './Component/Women/Women.component';
import { MAccessoriesComponent } from './Component/M-Accessories/M-Accessories.component';  
import { MShoesComponent } from './Component/M-Shoes/M-Shoes.component';
import { MClothingComponent } from './Component/M-clothing/M-clothing.component';
import { MNewInComponent } from './Component/M-NewIn/M-NewIn.component';
import { MBrandsComponent } from './Component/M-Brands/M-Brands.component';
import { WAccessoriesComponent } from './Component/W-Accessories/W-Accessories.component';
import { WShoesComponent } from './Component/W-Shoes/W-Shoes.component';
import { WClothingComponent } from './Component/W-Clothing/W-Clothing.component';
import { WNewInComponent } from './Component/W-NewIn/W-NewIn.component';
import { WBrandsComponent } from './Component/W-Brands/W-Brands.component';




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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
