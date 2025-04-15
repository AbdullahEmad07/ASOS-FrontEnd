import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  private baseUrl = environment.apiUrl; // Use the apiUrl from environment

  constructor(private _Http:HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
  }

  addToWishList(productId: string): Observable<any> {
    return this._Http.post(`${this.baseUrl}/WishList/products/${productId}`, {}, {
      headers: this.getHeaders()
    });
  };

  removeFromWishList(productId: string): Observable<any> {
    return this._Http.delete(`${this.baseUrl}/WishList/products/${productId}`, {
      headers: this.getHeaders()
    });
  };


getWishListProducts(): Observable<any> {
  return this._Http.get(`${this.baseUrl}/WishList/products`, {
    headers: this.getHeaders()
  }).pipe(
    tap({
      next: (response) => console.log('Wishlist Response:', response),
      error: (error) => console.error('Wishlist Error:', error)
    })
  );
}










  addTowishList2(productId:string):Observable<any>{
    return this._Http.post(`${this.baseUrl}/WishList/products/${productId}`, {});
  }

}
