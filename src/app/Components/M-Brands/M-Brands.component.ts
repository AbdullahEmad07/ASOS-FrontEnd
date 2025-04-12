import { Component, OnInit } from '@angular/core';
import { MenProductsService } from '../../Services/men-products.service';
import { IBrand } from '../../Models/ibrand';

@Component({
  selector: 'app-M-Brands',
  templateUrl: './M-Brands.component.html',
  styleUrls: ['./M-Brands.component.css']
})
export class MBrandsComponent implements OnInit {

  brandsArr:IBrand[] = [];
  constructor(private _MenProductsService:MenProductsService) { }

  ngOnInit() {
    this.getMenBrands();
  }

  getMenBrands() {
    this._MenProductsService.getMenBrands().subscribe(
      (response) => { 
        this.brandsArr = response.data;
        console.log(this.brandsArr);
        
       });
  }

}
