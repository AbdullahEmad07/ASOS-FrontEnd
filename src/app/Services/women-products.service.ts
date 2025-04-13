import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WomenProductsService {

  private baseUrl = environment.apiUrl; // Use the apiUrl from environment

  constructor(private _Http : HttpClient) { }

  getAllWomenProducts(pageNum : number = 1):Observable<any>{
    return this._Http.get(`${this.baseUrl}/Woman/products/${pageNum}`);
  }

  getWomenNewInProducts():Observable<any>{
    return this._Http.get(`${this.baseUrl}/Woman/newin`);
  }

  GetWomenClothingProducts():Observable<any> {
    return this._Http.get(`${this.baseUrl}/Woman/clothing`);
  }

  GetWomenShoesProducts():Observable<any> {
    return this._Http.get(`${this.baseUrl}/Woman/shoes`);
  }

  GetWomenAccessoriesProducts():Observable<any> {
    return this._Http.get(`${this.baseUrl}/Woman/accessories`);
  }

  getWomenBrands():Observable<any>{
    return this._Http.get(`${this.baseUrl}/Woman/brands`)
  }
}
