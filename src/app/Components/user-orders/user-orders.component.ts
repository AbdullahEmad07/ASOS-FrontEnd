import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../Services/order.service';
import { IOrderItem } from '../../Models/iorder'

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.css'
})
export class UserOrdersComponent implements OnInit {
  _OrderService = inject(OrderService);
  userId: string = '';
  orders: any[] = []; // Array to store all orders
  
  constructor() {}

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId") || '';
    this.GetUserOrders();
  }
   
  GetUserOrders() {
    this._OrderService.getUserOrders(this.userId).subscribe({
      next: (response) => {
        if (response.success) {
          this.orders = response.data; // Store the entire orders array
          // console.log('Orders:', this.orders);
        }
      },
      error: (error) => {
        // console.error('Error fetching orders:', error);
      }
    });
  }
}
