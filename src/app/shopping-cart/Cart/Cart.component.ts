import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../Services/shopping-cart.service';
import { IProduct } from '../../Models/iproduct';
import { ToastrService } from 'ngx-toastr';
import { ICartProduct } from '../../Models/icart-product';

@Component({
  selector: 'app-cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {
   
  couponCode: string = '';
  subtotal: number = 0;
  total: number = 0;

  totalPrice : number = 0 ;
  totalCount : number = 0 ;

  cartProducts : ICartProduct [] = [] ;
  isLoading: boolean = false;
  loggedUserToken: any;

  constructor(private _ShoppingCartService : ShoppingCartService ,  private toastr:ToastrService) {}

  ngOnInit(): void {
    this.loggedUserToken = localStorage.getItem('token');
    this.GetloggedUserCart();
  }

  GetloggedUserCart(){
    this.isLoading=true;

    this._ShoppingCartService.getCartProducts().subscribe({
      next: (response) => {
        console.log(response);
        
        this.isLoading=false;

        this.cartProducts = response.data;
        this.totalPrice = response.totalPrice;
        this.totalCount = response.totalCount;


        // console.log(this.cartProducts , this.totalCount , this.totalPrice);
      },
      error : (err)=>{
        console.log(err);
        this.isLoading=false;
      }
    })
  }

  removeProduct(id:string){
    this._ShoppingCartService.removeFromCart(id).subscribe({
      next:(response) => {
        this.toastr.error("Product Deleted")
        this.GetloggedUserCart();
      },
      error: (err) => {
        this.toastr.error('Failed to Delete from Cart');
      }
    })
  }

  
  increaseQuantity(item: any): void {
    item.quantity++;
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  
}