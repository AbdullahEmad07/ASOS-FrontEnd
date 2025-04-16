import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
declare var Stripe: any;

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = environment.apiUrl;
  private stripePublishableKey = 'pk_test_51RC6glQ8RaciZnLJ27ML29PDXDMNBdUEj6nIhdNkEWcvwM0hTXJ82Etv9Eapbd3lpHse7NoFX9C7veCWblmHLY6000u7j9chus';
  private stripe: any;

  constructor(private _Http: HttpClient) {
    this.stripe = Stripe(this.stripePublishableKey);
  }

  // Add getUserOrders method
  getUserOrders(userId: string): Observable<any> {
    return this._Http.get(`${this.baseUrl}/Order/user-orders`, {
      headers: this.getHeaders(),
      params: new HttpParams().set('userId', userId)
    });
  }

  async redirectToPayment(clientSecret: string) {
    try {
      const result = await this.stripe.redirectToCheckout({
        clientSecret: clientSecret
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      throw error;
    }
  }

  getStripeKey(): string {
    return this.stripePublishableKey;
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  confirmPayment(paymentIntentId: string): Observable<any> {
    return this._Http.post(`${this.baseUrl}/Webhook/${paymentIntentId}`, null, {
      headers: this.getHeaders()
    });
  }

  // Added from ShoppingCartService
  createOrder(cartId: string, address: string, phoneNumber: string): Observable<any> {
    const params = new HttpParams()
      .set('cartId', cartId)
      .set('address', address)
      .set('phoneNumber', phoneNumber);

    return this._Http.post(`${this.baseUrl}/Order/create`, null, {
      headers: this.getHeaders(),
      params: params
    });
  }

  completeOrder(orderId: string): Observable<any> {
    return this._Http.post(`${this.baseUrl}/Order/complete?orderId=${orderId}`, {}, {
      headers: this.getHeaders()
    });
  }
}