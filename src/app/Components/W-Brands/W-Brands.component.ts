import { Component, OnInit } from '@angular/core';
import { IBrand } from '../../Models/ibrand';
import { WomenProductsService } from '../../Services/women-products.service';

@Component({
  selector: 'app-W-Brands',
  templateUrl: './W-Brands.component.html',
  styleUrls: ['./W-Brands.component.css']
})
export class WBrandsComponent implements OnInit {
brandsArr:IBrand[] = [];
  constructor(private _WomenProductsService:WomenProductsService) { }

  ngOnInit() {
    this.getMenBrands();
  }

  getMenBrands() {
    this._WomenProductsService.getWomenBrands().subscribe(
      (response) => { 
        this.brandsArr = response.data;
        // console.log(this.brandsArr);
        
       });
  }

}
