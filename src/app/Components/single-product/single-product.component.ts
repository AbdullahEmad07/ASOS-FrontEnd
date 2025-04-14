import { Component, OnInit } from '@angular/core';
import { SingleProductService } from '../../Services/single-product.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent implements OnInit {
 
  productId : string =""
  product:IProduct = {} as IProduct ;

  mainImage: string = '../../../assets/1.jpg';
  thumbnails: string[] = [
    '../../../assets/2.jpg',
    '../../../assets/11.jpg',
    './../../assets/2.jpg',
    '../../../assets/3.jpg'
  ];



  constructor(private _SingleProductService:SingleProductService , private _ActivatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.productId = this._ActivatedRoute.snapshot.params['productId']
    console.log(this.productId);
    this.GetProduct();
    
  }

  GetProduct(){
    this._SingleProductService.getProductDetails(this.productId).subscribe({
      next:(response) => {
        this.product = response.data ;
        // console.log(this.product);

        this.mainImage = this.product.imageUrls[0];
        this.thumbnails=this.product.imageUrls;
      }

    })
  }

  setMainImage(image: string) {
    this.mainImage = image;
  }



}
