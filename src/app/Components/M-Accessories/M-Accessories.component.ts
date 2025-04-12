import { Component, OnInit } from '@angular/core';
import { MenProductsService } from '../../Services/men-products.service';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-M-Accessories',
  templateUrl: './M-Accessories.component.html',
  styleUrls: ['./M-Accessories.component.css']
})
export class MAccessoriesComponent implements OnInit {

  products : IProduct[] = [];
  productsFilteringArray : IProduct[] = []; 
  searchWord:string = ""

  constructor(private _MenProductsService:MenProductsService) { }

  ngOnInit() {
    this.GetAllAccessoriesProducts();
  };

  GetAllAccessoriesProducts() {
    this._MenProductsService.getMenAccessoriesProducts().subscribe({
      next: (response) => {
        this.products = response.data;
        this.productsFilteringArray = [...this.products];
        // console.log(this.products);
      }
    })
  };

  GetMenSunglassesProducts(){
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Sunglasses");
  }
  GetMenWatchesProducts(){
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Watches");
  }
  GetMenCaps_HatsProducts(){
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Caps & Hats");
  }
  GetMenBeltsProducts(){
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Belts");
  }

}
