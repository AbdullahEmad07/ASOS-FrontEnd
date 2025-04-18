import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './Profile/Profile.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    ProfileComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProfileRoutingModule,
    ToastrModule
  ]
})
export class ProfileModule { }
