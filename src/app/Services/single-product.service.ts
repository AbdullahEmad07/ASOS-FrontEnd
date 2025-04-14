import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleProductService {
  private baseUrl = environment.apiUrl; // Use the apiUrl from environment
  
  constructor(private _Http:HttpClient) { }

  getProductDetails(productId:string):Observable<any>{
    return this._Http.get(`${this.baseUrl}/Product/${productId}`)
  }
}
