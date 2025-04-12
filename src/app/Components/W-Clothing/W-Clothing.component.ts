import { Component, OnInit } from '@angular/core';
import { WomenProductsService } from '../../Services/women-products.service';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-W-Clothing',
  templateUrl: './W-Clothing.component.html',
  styleUrls: ['./W-Clothing.component.css']
})
export class WClothingComponent implements OnInit {
 
  products:IProduct[] = [];
  productsFilteringArray:IProduct[] = [];
  searchWord:string = ""

  constructor(private _WomenProductsService: WomenProductsService) { }

  ngOnInit() {
    this.GetAllClothingProducts();
  }

  GetAllClothingProducts() {
    this._WomenProductsService.GetWomenClothingProducts().subscribe({
      next: (response) => {
        this.products = response.data ;
        this.productsFilteringArray = [...this.products];
        // console.log(this.products);
      }
    })
  };

  GetWomenDressesProducts() {
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Dresses");
  }
  GetWomenBlousesProducts() {
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Blouses");
  }
  GetWomenCoats_JacketsProducts() {
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Coats & Jackets");
  }
  GetWomenHoodies_SweatshirtsProducts() {
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Hoodies & Sweatshirts");
  }
}
