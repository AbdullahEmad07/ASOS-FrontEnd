import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../../Services/authen.service';
import { ShoppingCartService } from '../../Services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  enableNavbar : any ;
  totalCount:number = 0 ;

  constructor(private _AuthenService:AuthenService , private _ShoppingCartService:ShoppingCartService) { }

  ngOnInit() {

    let myToken = localStorage.getItem('token');

    this._AuthenService.isLogin.subscribe({
      next: (behaviorSubValue) =>{ 
        this.enableNavbar = behaviorSubValue
        console.log(behaviorSubValue);
        }
    });

    this.GetloggedUserCart();

    this._ShoppingCartService.cartPtoductNum.subscribe({
      next:(bahviorSubVal) => { this.totalCount = bahviorSubVal}
    })

  }


  GetloggedUserCart(){

    this._ShoppingCartService.getCartProducts().subscribe({
      next: (response) => {
        console.log(response);
        

        this.totalCount = response.totalCount;

        // console.log(this.cartProducts , this.totalCount , this.totalPrice);

      },
      error : (err)=>{
        console.log(err);
      }
    })
  }



  logOut(){
    this._AuthenService.logOut()
  }
}
