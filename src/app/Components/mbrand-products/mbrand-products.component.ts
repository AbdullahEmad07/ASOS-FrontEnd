import { Component, OnInit } from '@angular/core';
import { MenProductsService } from '../../Services/men-products.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-mbrand-products',
  templateUrl: './mbrand-products.component.html',
  styleUrl: './mbrand-products.component.scss'
})
export class MBrandProductsComponent implements OnInit {


  brandName:string = "";
  products:IProduct[] = [] ;

  constructor(private _MenProductsService:MenProductsService , private _ActivatedRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.brandName = this._ActivatedRoute.snapshot.params['brandName'];
    this.GetBrandProducts();
  }


  GetBrandProducts(){
    this._MenProductsService.getMenBrandProducts(this.brandName).subscribe({
      next: (response) => {
        this.products = response.data ;
        // console.log(response.data);
        
      }
    })
  }

}
