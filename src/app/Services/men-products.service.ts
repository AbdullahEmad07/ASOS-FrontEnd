import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MenProductsService {

  private baseUrl = environment.apiUrl; // Use the apiUrl from environment
  constructor(private _Http : HttpClient) { }

  getAllMenProducts(pageNum : number = 1):Observable<any>{
    return this._Http.get(`${this.baseUrl}/Men/products/${pageNum}`);
  }

  getMenNewInProducts():Observable<any>{
    return this._Http.get(`${this.baseUrl}/Men/newin`);
  }

  getMenClothingProducts():Observable<any> {
    return this._Http.get(`${this.baseUrl}/Men/clothing`);
  }

  getMenShoesProducts():Observable<any>{
    return this._Http.get(`${this.baseUrl}/Men/shoes`);
  }

  getMenAccessoriesProducts():Observable<any>{
    return this._Http.get(`${this.baseUrl}/Men/accessories`);
  }

  getMenBrands():Observable<any>{
    return this._Http.get(`${this.baseUrl}/Men/brands`)
  }
}
