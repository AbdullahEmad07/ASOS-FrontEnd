import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenProductsService {

  constructor(private _Http : HttpClient) { }

  getMenClothingProduct():Observable<any> {
    return this._Http.get('https://localhost:7023/api/Men/clothing');
  }
}
