import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from '../../Services/authen.service';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router , private _AuthenService : AuthenService) { }

  ngOnInit() {
  }

  logout() {
    this._AuthenService.isLogin.next(false);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/home']);
  }
}
