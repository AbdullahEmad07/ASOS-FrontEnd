import { Component, OnInit } from '@angular/core';
import { MenProductsService } from '../../Services/men-products.service';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-M-Shoes',
  templateUrl: './M-Shoes.component.html',
  styleUrls: ['./M-Shoes.component.css']
})
export class MShoesComponent implements OnInit {

  products:IProduct[] = [];
  productsFilteringArray:IProduct[] = [];
  searchWord:string = ""


  constructor(private _MenProductsService:MenProductsService) { }

  ngOnInit() {
    this.GetAllShoesProducts();
  }

  GetAllShoesProducts() {
    this._MenProductsService.getMenShoesProducts().subscribe({
      next: (response) => {
        this.products = response.data;
        this.productsFilteringArray = [...this.products];
        // console.log(this.products);   
      }
    })
  };

  GetMenRunningTrainersproducts(){
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Running Trainers");  
  };

  GetMenLoafersProducts(){
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Loafers");
  };

  GetMenSandalsProducts(){
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Sandals");
  };

  GetMenFlipFlopsProducts(){
    this.products = this.productsFilteringArray.filter( product => product.productTypeName == "Flip Flops");
  };

}
