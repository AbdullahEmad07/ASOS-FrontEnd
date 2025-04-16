import { Component, OnInit } from '@angular/core';
import { SingleProductService } from '../../Services/single-product.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../Models/iproduct';
import { WishListService } from '../../Services/wish-list.service';
import { ToastrService } from 'ngx-toastr';
import { ShoppingCartService } from '../../Services/shopping-cart.service';

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



  constructor(private _SingleProductService:SingleProductService , private _ActivatedRoute:ActivatedRoute , private _WishListService: WishListService, private _ShoppingCartService : ShoppingCartService , private toastr: ToastrService){}

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


  AddToWishList(productId:any){
    this._WishListService.addToWishList(productId).subscribe({
      next: (response) => { 
       
        this.showSuccess()
        // console.log(response); 
      },
      error : (err) => { console.log(err) ;}
    })
  }

  AddToCart(productId:any){
    this._ShoppingCartService.addToCart(productId).subscribe({
      next: (response) => {
        this.toastr.success("Product Added To Cart");
        this.GetCartProducts();
      },
      error: (err) => { console.log(err)}
    })
  }


  GetCartProducts(){
    this._ShoppingCartService.getCartProducts().subscribe({
      next: (response) => { 
        if (response && response.data) {
          this._ShoppingCartService.cartPtoductNum.next(response.totalCount)
        }
      },
      error: (error) => {
        console.error('Error fetching wishlist:', error);
        this.toastr.error('Failed to fetch wishlist');
      }
    });
  };
  


  showSuccess() {
    this.toastr.success('Product Added To Wish List');
  }

  setMainImage(image: string) {
    this.mainImage = image;
  }



}
