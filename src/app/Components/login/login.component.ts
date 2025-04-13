import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('imageSlide', [
      state('login', style({ transform: 'translateX(0%)' })),
      state('register', style({ transform: 'translateX(100%)' })),
      transition('login <=> register', animate('800ms ease-in-out')),
    ]),
    trigger('formFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms 300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
      ]),
    ]),
  ],
})

export class LoginComponent {
  isRegistered: boolean = false;

  toggleForm() {
    this.isRegistered = !this.isRegistered;
  }
  
  }
