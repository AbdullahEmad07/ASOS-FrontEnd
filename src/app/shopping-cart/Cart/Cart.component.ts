import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {
   cartItems = [
    { name: 'Asos design Black dress', code: 'G2356', price: 1250, quantity: 1, image: 'https://i.pinimg.com/736x/9a/97/24/9a9724ce27d3a072b2e3dabbdc8cf6db.jpg' },
   ];

  couponCode: string = '';
  subtotal: number = 0;
  total: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.calculateTotals();
  }

   increaseQuantity(item: any): void {
    item.quantity++;
    this.calculateTotals();
  }

   decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
    this.calculateTotals();
  }

   removeItem(item: any): void {
    this.cartItems = this.cartItems.filter(i => i !== item);
    this.calculateTotals();
  }

   applyCoupon(): void {
    console.log('Coupon applied: ', this.couponCode);
   }

   calculateTotals(): void {
    this.subtotal = this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    this.total = this.subtotal;  
  }
}
