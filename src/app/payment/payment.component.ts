import { Component, OnInit } from '@angular/core';
import { OrderService } from '../Services/order.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
declare var Stripe: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  stripe: any;
  card: any;
  cardErrors: string = '';
  loading: boolean = false;

  constructor(
    private orderService: OrderService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    // Check for HTTPS
    if (window.location.protocol !== 'https:' && !this.isDevelopment()) {
      window.location.href = window.location.href.replace('http:', 'https:');
      return;
    }
    
    // Initialize Stripe
    try {
      this.stripe = Stripe(this.orderService.getStripeKey());
    } catch (error) {
      console.error('Stripe initialization failed:', error);
      this.toastr.error('Payment system initialization failed');
    }
  }

  private isDevelopment(): boolean {
    return window.location.hostname === 'localhost' || 
           window.location.hostname === '127.0.0.1';
  }

  ngOnInit() {
    const clientSecret = localStorage.getItem('clientSecret');
    if (!clientSecret) {
      this.toastr.error('Payment session not found');
      this.router.navigate(['/cart']);
      return;
    }
    this.setupStripeElements();
  }

  setupStripeElements() {
    const elements = this.stripe.elements();
    const style = {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };
    
    this.card = elements.create('card', { style });
    this.card.mount('#card-element');

    this.card.addEventListener('change', (event: any) => {
      this.cardErrors = event.error ? event.error.message : '';
    });
  }

  async handlePayment() {
    if (!this.stripe) {
      this.toastr.error('Payment system not initialized');
      return;
    }
    this.loading = true;
    try {
      const clientSecret = localStorage.getItem('clientSecret');
      if (!clientSecret) {
        this.toastr.error('Payment session expired');
        this.router.navigate(['/cart']);
        return;
      }

      // First retrieve the PaymentIntent status
      const { paymentIntent: existingIntent } = await this.stripe.retrievePaymentIntent(clientSecret);
      
      if (existingIntent.status === 'succeeded') {
        this.toastr.success('Payment already processed');
        localStorage.removeItem('clientSecret');
        localStorage.removeItem('cartId');
        this.router.navigate(['user-orders']);
        return;
      }

      // Only proceed with confirmation if not already processed
      const { paymentIntent, error } = await this.stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: this.card
          }
        }
      );

      if (error) {
        this.toastr.error(error.message);
        throw error;
      }

      if (paymentIntent.status === 'succeeded') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.toastr.success('Payment successful!');
        
        try {
          await this.orderService.confirmPayment(paymentIntent.id).toPromise();
          console.log('Payment confirmed:', paymentIntent.id);
          localStorage.removeItem('clientSecret');
          localStorage.removeItem('cartId');
          this.router.navigate(['user-orders']);
        } catch (error) {
          console.error('Error confirming payment:', error);
          this.toastr.error('Error updating order status');
        }
      }
    } catch (error: any) {
      console.error('Payment failed:', error);
      this.cardErrors = error.message;
      this.toastr.error(error.message || 'Payment failed');
    } finally {
      this.loading = false;
    }
  }

  ngOnDestroy() {
    if (this.card) {
      this.card.destroy();
    }
  }
}