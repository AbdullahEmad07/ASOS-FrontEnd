import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../Services/wish-list.service';
import { IProduct } from '../../Models/iproduct';
import { ToastrService } from 'ngx-toastr';
import { ShoppingCartService } from '../../Services/shopping-cart.service';



@Component({
  selector: 'app-WishList',
  templateUrl: './WishList.component.html',
  styleUrls: ['./WishList.component.css']
})
export class WishListComponent implements OnInit {
  wishListProducts:IProduct[] = [] ;
  isLoading: boolean = false;
  loggedUserToken: any;

  constructor(private wishListService: WishListService , private toastr: ToastrService , private _ShoppingCartService : ShoppingCartService) { }

  ngOnInit() {
    this.loggedUserToken = localStorage.getItem('token');

    this.loadWishListProducts();
  }

  get hasProducts(): boolean {
    return this.wishListProducts?.length > 0;
  }

  loadWishListProducts() {
    this.isLoading = true;
    this.wishListService.getWishListProducts().subscribe({
      next: (response) => {
        this.wishListProducts = response.data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching wishlist:', error);
        this.isLoading = false;
      }
    });
  }

  removeFromWishList(productId: string) {
    this.wishListService.removeFromWishList(productId).subscribe({
      next: () => {
        this.showError();
        this.loadWishListProducts();
      },
      error: (error) => {
        console.error('Error removing from wishlist:', error);
      }
    });
  }


AddToCart(productId: string){
  this._ShoppingCartService.addToCart(productId).subscribe({
    next: (response) => {
      this.toastr.success("Product Added to Cart");
      this.removeFromWishList(productId)
    },
    error: (err) => {
      this.toastr.error("Failed To Add To Cart")
    }
  })
    
  
}


showSuccess() {
  this.toastr.success('Product Added To Wish List');
}

showError() {
  this.toastr.error('Product Removed To Wish List');
}
}