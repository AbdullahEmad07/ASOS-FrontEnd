import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../../Services/authen.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  enableNavbar : any ;

  constructor(private _AuthenService:AuthenService) { }

  ngOnInit() {

    let myToken = localStorage.getItem('token');

    this._AuthenService.isLogin.subscribe({
      next: (behaviorSubValue) =>{ 
        this.enableNavbar = behaviorSubValue
        console.log(behaviorSubValue);
        
      }
    })


  }

  logOut(){
    this._AuthenService.logOut()
  }
}
