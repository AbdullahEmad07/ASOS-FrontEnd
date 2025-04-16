import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../Services/shopping-cart.service';
import { IProduct } from '../../Models/iproduct';
import { ToastrService } from 'ngx-toastr';
import { ICartProduct } from '../../Models/icart-product';
import { Router } from '@angular/router';
import { OrderService } from '../../Services/order.service';
declare var Stripe: any;

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
  address: string = '';
  phoneNumber: string = '';
  private stripe: any;

  constructor(
    private _ShoppingCartService: ShoppingCartService,
    private orderService: OrderService,  // Add this injection
    private toastr: ToastrService,
    private router: Router
  ) {
    this.stripe = Stripe('your_publishable_key'); // Replace with your Stripe publishable key
  }

  ngOnInit(): void {
    this.loggedUserToken = localStorage.getItem('token');
    this.GetloggedUserCart();
  }

  GetloggedUserCart(){
    this.isLoading=true;
    
    this._ShoppingCartService.getCartProducts().subscribe({
      next: (response) => {
        if (response && response.cartId) {
          localStorage.setItem('cartId', response.cartId);
          console.log('Cart ID from response:', response.cartId);
          console.log('Cart ID from localStorage:', localStorage.getItem('cartId'));
        } else {
          console.warn('No cartId in response:', response);
        }
        
        this.isLoading = false;
        this.cartProducts = response.data;
        this.totalPrice = response.totalPrice;
        this._ShoppingCartService.cartPtoductNum.next(response.totalCount);
      },
      error: (err) => {
        console.error('Error fetching cart:', err);
        this.isLoading = false;
      }
    });

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


  increaseQuantity(productId: string , quantity:number): void {
    quantity++;
    this._ShoppingCartService.updateQuantity(productId , quantity).subscribe({
      next: (response) => {
        console.log(response);

        if(response == "Quantity updated"){
          this.GetloggedUserCart();
          this.toastr.show("you increase product items")
        }
        
      }, 
      error: (err) => {
        this.toastr.error("Failed to update Quantity")
      }
    })

  }

  decreaseQuantity(productId: string , quantity:number): void {
    
    if (quantity > 1) {
      quantity--;

      this._ShoppingCartService.updateQuantity(productId , quantity).subscribe({
        next: (response) => {
          console.log(response);
  
          if(response == "Quantity updated"){
            this.GetloggedUserCart();
            this.toastr.show("you Decrease product items")
          }
          
        }, 
        error: (err) => {
          this.toastr.error("Failed to update Quantity")
        }
      })
      
    }else{
      quantity == 1
      this.toastr.error("Can't Decrease Less Than 1 Item")
    }

    
  }

  async checkout() {
    if (!this.address || !this.phoneNumber) {
      this.toastr.error('Please provide address and phone number');
      return;
    }

    const cartId = localStorage.getItem('cartId');
    if (!cartId) {
      this.toastr.error('Cart ID not found');
      return;
    }

    try {
      // Create order with proper request format
      const orderResponse = await this.orderService.createOrder(
        cartId,
        this.address,
        this.phoneNumber
      ).toPromise();

      if (!orderResponse || !orderResponse.orderId) {
        this.toastr.error('Invalid order response');
        return;
      }

      // Complete order and get client secret
      const completeResponse = await this.orderService.completeOrder(orderResponse.orderId).toPromise();

      if (!completeResponse || !completeResponse.clientSecret) {
        this.toastr.error('Invalid payment response');
        return;
      }

      // Store the client secret and navigate
      localStorage.setItem('clientSecret', completeResponse.clientSecret);
      this.router.navigate(['/payment']);
    } catch (error: any) {
      this.toastr.error(error.error?.message || 'Failed to process order');
      console.error('Order error:', error);
    }
  }

  // Add this new method
  goToCheckout() {
    this.router.navigate(['/order']);
  }
}