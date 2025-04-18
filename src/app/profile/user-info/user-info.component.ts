import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../../Services/authen.service';
import { ToastrService } from 'ngx-toastr';

interface UserInfo {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userInfo: UserInfo | null = null;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(
    private authenService: AuthenService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loadUserInfo();
  }

  loadUserInfo() {
    this.isLoading = true;
    this.error = null;
    
    this.authenService.getloggeduser().subscribe({
      next: (response) => {
        this.userInfo = response;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.error = 'Unable to load user information. Please try again later.';
        this.toastr.error('Failed to load user information');
        console.error('Error loading user info:', error);
      }
    });
  }

  retryLoading() {
    this.loadUserInfo();
  }
}