import { IProduct } from '../../Models/iproduct';
import { MenProductsService } from './../../Services/men-products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-M-clothing',
  templateUrl: './M-clothing.component.html',
  styleUrls: ['./M-clothing.component.css']
})
export class MClothingComponent implements OnInit {

  products: IProduct[] = [];
  productsFilteringArray: IProduct[] = [];
  searchWord:string = ""
  

  constructor(private _MenProductsService : MenProductsService) { }

  ngOnInit() {

    this.GetAllClothingProducts();
   
  };



  GetAllClothingProducts() {
    this._MenProductsService.getMenClothingProducts().subscribe({
      next: (response) => {
        this.products = response.data;
        this.productsFilteringArray = [...this.products];
        // console.log(this.products);
      }
    })
  };

  GetMenJeansProducts() {
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Jeans");
  }
  GetMenShirtsProducts() {
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Shirts");
  }
  GetMenJacketsProducts() {
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Jackets");
  }
  GetMenSuitsProducts() {
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Suits");
  }



}
