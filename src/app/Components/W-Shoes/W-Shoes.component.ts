import { Component, OnInit } from '@angular/core';
import { WomenProductsService } from '../../Services/women-products.service';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-W-Shoes',
  templateUrl: './W-Shoes.component.html',
  styleUrls: ['./W-Shoes.component.css']
})
export class WShoesComponent implements OnInit {

    products:IProduct[] = [];
    productsFilteringArray:IProduct[] = [];
    searchWord:string = ""

  constructor(private _WomenProductsService: WomenProductsService) { }

  ngOnInit() {
    this.GetAllShoesProducts();
  }

  GetAllShoesProducts() {
    this._WomenProductsService.GetWomenShoesProducts().subscribe({
      next: (response) => {
        this.products = response.data ;
        this.productsFilteringArray = [...this.products];
        // console.log(this.products);
      }
    })
  };

  GetWomenTrainersProducts() {
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Trainers");
  }
  GetWomenBootsProducts() {
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Boots");
  }
  GetWomenLoafersProducts() {
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Loafers");
  }
  GetWomenHealsProducts() {
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Heals");
  }

}
