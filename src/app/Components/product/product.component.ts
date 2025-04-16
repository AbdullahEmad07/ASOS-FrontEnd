import { Component ,ElementRef, ViewChild, Renderer2, AfterViewInit, OnInit, Input  } from '@angular/core';
import { MenProductsService } from '../../Services/men-products.service';
import { IProduct } from '../../Models/iproduct';
import { WishListService } from '../../Services/wish-list.service';
import { ToastrService } from 'ngx-toastr';
import { ShoppingCartService } from '../../Services/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
 
  @Input() product: IProduct = {} as IProduct; 
  loggedUserToken: string | null = null;
  wishListProductsId: string[] = []; 
  CartProductsId: string[] = []; 
  

  constructor(private _MenProductsService:MenProductsService, private _WishListService:WishListService, private _ShoppingCartServices : ShoppingCartService , private toastr:ToastrService , private _ShoppingCartService : ShoppingCartService){}

  ngOnInit(): void {
    this.loggedUserToken = localStorage.getItem('token');
    if (this.loggedUserToken) {
      this.GetWishListProducts();
      this.GetCartProducts();
    }
  }

  AddToWishList(productId:any){
    if (!this.loggedUserToken) {
      this.toastr.error('Please login first');
      return;
    }

    this._WishListService.addToWishList(productId).subscribe({
      next: (response) => { 
        this.showSuccess();
        this.GetWishListProducts();
      },
      error: (err) => {
        this.toastr.error('Failed to add to wishlist');
      }
    });
  };

  removeFromWishList(productId: string) {
    this._WishListService.removeFromWishList(productId).subscribe({
      next: (response) => {
        // console.log(response);
        this.showError();
        this.GetWishListProducts();          
      },
      error: (error) => {
        console.error('Error removing from wishlist:', error);
      }
    });
  };



  GetWishListProducts(){
    this._WishListService.getWishListProducts().subscribe({
      next: (response) => { 
        if (response && response.data) {
          this.wishListProductsId = response.data.map((product: any) => product.id);
          // console.log('Wishlist product IDs:', this.wishListProductsId);
        }
      },
      error: (error) => {
        console.error('Error fetching wishlist:', error);
        this.toastr.error('Failed to fetch wishlist');
      }
    });
  };


  AddToCart(productId:any){
    if (!this.loggedUserToken) {
      this.toastr.error('Please login first');
      return;
    }

    this._ShoppingCartService.addToCart(productId).subscribe({
      next: (response) => { 
        this.toastr.success("Product Added To Cart");
        this.GetCartProducts();
      },
      error: (err) => {
        this.toastr.error('Failed to add to Cart');
      }
    });
  }

  removeFromCart(productId: string) {
    this._ShoppingCartService.removeFromCart(productId).subscribe({
      next: (response) => {
        this.toastr.error("Product is removed From Cart");
        this.GetCartProducts();
      },
      error: (error) => {
        this.toastr.error('Failed to remove from Cart');
      }
    });
  }


  GetCartProducts(){
    this._ShoppingCartServices.getCartProducts().subscribe({
      next: (response) => { 
        if (response && response.data) {
          this.CartProductsId = response.data.map((product: any) => product.id);
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

  showError() {
    this.toastr.error('Product Removed To Wish List');
  }
  // Remove ngAfterViewInit as we're now handling state with Angular bindings
}
