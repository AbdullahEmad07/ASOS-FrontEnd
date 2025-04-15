import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IUser } from '../Models/iuser';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILoginData } from '../Models/login-data';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

   // used to deal with navBar / footer / pathGuard 
  isLogin : BehaviorSubject<boolean> = new BehaviorSubject(false) ;

  private baseUrl = environment.apiUrl; // Use the apiUrl from environment
  
  constructor(private _Http:HttpClient , private _Router : Router) {

    if(localStorage.getItem('token')){
        this.isLogin.next(true);
        _Router.navigate(['home']);
      }

    }
    

   

  signUp(user:IUser):Observable<any>{
    return this._Http.post(`${this.baseUrl}/users/register` , user)
 
   };

   logIN(user: ILoginData):Observable<any>{
    return this._Http.post(`${this.baseUrl}/users/login` , user)
  };
 
  logOut(){
    this.isLogin.next(false);
    localStorage.removeItem('token');
    this._Router.navigate(['/home']);
  };
  
}
