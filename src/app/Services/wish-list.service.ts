import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  private baseUrl = environment.apiUrl; // Use the apiUrl from environment

  constructor(private _Http:HttpClient) { }

  addTowishList(productId:any){
    const token = localStorage.getItem('token'); 
    
    if (!token) {
      throw new Error('No token found');
    }

    console.log(jwtDecode(token)); // Fixed: Use token variable instead of 'token' string
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this._Http.post(
      `${this.baseUrl}/WishList/products/${productId}`, 
      {}, // Empty body
      { headers } // Correct way to send headers
    );
  }


  addTowishList2(productId:string):Observable<any>{
    return this._Http.post(`${this.baseUrl}/WishList/products/${productId}`, {});
  }

}
