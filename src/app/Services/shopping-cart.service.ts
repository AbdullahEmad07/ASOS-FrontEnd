import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private baseUrl = environment.apiUrl; // Use the apiUrl from environment
  
  constructor() { }
  
}
