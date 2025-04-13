import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { WomenProductsService } from '../../Services/women-products.service';

@Component({
  selector: 'app-W-Accessories',
  templateUrl: './W-Accessories.component.html',
  styleUrls: ['./W-Accessories.component.css']
})
export class WAccessoriesComponent implements OnInit {

   products:IProduct[] = [];
   productsFilteringArray:IProduct[] = [];
   searchWord:string = ""
 
   constructor(private _WomenProductsService: WomenProductsService) { }
 
   ngOnInit() {
     this.GetAllAccessoriesProducts();
   }
 
   GetAllAccessoriesProducts() {
     this._WomenProductsService.GetWomenAccessoriesProducts().subscribe({
       next: (response) => {
         this.products = response.data ;
         this.productsFilteringArray = [...this.products];
         // console.log(this.products);
       }
     })
   };
 
   GetWomenSunglassesProducts() {
     this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Sunglasses");
   }
   GetWomenHatsProducts() {
     this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Hats");
   }
   GetWomenGlovesProducts() {
     this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Gloves");
   }
   GetWomenScarvesProducts() {
     this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Scarves");
   }

}
