import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate , state } from '@angular/animations';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
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
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isRegistered: boolean = true;

  toggleForm() {
    this.isRegistered = !this.isRegistered;
  }

}
