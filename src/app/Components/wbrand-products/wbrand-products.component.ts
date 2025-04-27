import { Component, OnInit } from '@angular/core';
import { WomenProductsService } from '../../Services/women-products.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-wbrand-products',
  templateUrl: './wbrand-products.component.html',
  styleUrl: './wbrand-products.component.scss'
})
export class WBrandProductsComponent implements OnInit {

  
    brandName:string = "";
    products:IProduct[] = [] ;
  
    constructor(private _WomenProductsService:WomenProductsService , private _ActivatedRoute : ActivatedRoute){}
  
    ngOnInit(): void {
      this.brandName = this._ActivatedRoute.snapshot.params['brandName'];
      this.GetBrandProducts();
    }
  
  
    GetBrandProducts(){
      this._WomenProductsService.getWomenBrandProducts(this.brandName).subscribe({
        next: (response) => {
          this.products = response.data ;
          // console.log(response.data);
          
        }
      })
    }

}
