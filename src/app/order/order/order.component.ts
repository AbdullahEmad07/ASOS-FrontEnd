import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../Services/order.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';  // Add this import

@Component({
  selector: 'app-order',
  templateUrl: './Order.component.html',
  styleUrls: ['./Order.component.css']
})
export class OrderComponent implements OnInit {
  address: string = '';
  phoneNumber: string = '';
  isLoading: boolean = false;

  constructor(
    private orderService: OrderService,
    private toastr: ToastrService,
    private router: Router  // Add router injection
  ) {}

  ngOnInit() {}

  async submitOrder() {
    if (!this.address || !this.phoneNumber) {
      this.toastr.error('Please fill in all required fields');
      return;
    }

    const cartId = localStorage.getItem('cartId');
    if (!cartId) {
      this.toastr.error('Cart not found');
      return;
    }

    this.isLoading = true;
    try {
      const response = await this.orderService.createOrder(
        cartId,
        this.address,
        this.phoneNumber
      ).toPromise();

      if (response && response.success && response.data) {
        // Store the client secret and navigate to payment
        localStorage.setItem('clientSecret', response.data);
        this.router.navigate(['/payment']);
      } else {
        this.toastr.error(response?.errors?.[0]?.message || 'Failed to create order');
      }
    } catch (error) {
      console.error('Order Error:', error);
      this.toastr.error('Failed to create order');
    } finally {
      this.isLoading = false;
    }
}
}