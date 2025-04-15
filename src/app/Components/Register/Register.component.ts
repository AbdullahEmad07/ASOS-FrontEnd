import { Component } from '@angular/core';
import { trigger, transition, style, animate , state } from '@angular/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenService } from '../../Services/authen.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { IUser } from '../../Models/iuser';


@Component({
  selector: 'app-Register',
  templateUrl:'./Register.component.html',
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
export class RegisterComponent {

  isRegistered: boolean = true;
  isLoading: boolean = false;
  apiResponse: string = "";
  user : IUser = {} as IUser ;

  registerForm = new FormGroup({
    userName :new FormControl("" , [Validators.required , Validators.minLength(3) ,Validators.maxLength(16) ]),
    email :new FormControl("" , [Validators.required , Validators.email]  ),
    password :new FormControl("" , [ Validators.required , Validators.pattern(/^[A-z][a-zA-Z0-9 ]{6,16}$/)]),
    rePassword :new FormControl("", [ Validators.required , Validators.pattern(/^[A-z][a-zA-Z0-9 ]{6,16}$/)]),
})


loginForm = new FormGroup({
  email : new FormControl("", [Validators.required , Validators.email]),
  password: new FormControl("" , [Validators.required ])
});
  


  constructor(private _AuthenService:AuthenService , private _Router:Router) { }


  register(formData : FormGroup){

    formData.markAllAsTouched();

    if(formData.valid && (formData.get('password')?.value ?? '') === (formData.get('rePassword')?.value ?? '')){

      this.isLoading=true;

      // console.log(formData.value.userName , formData.value.email , formData.value.password);
      this.user.userName = formData.value.userName;
      this.user.email = formData.value.email;
      this.user.password = formData.value.password;
      
      this._AuthenService.signUp(this.user).subscribe({

         next:(response) => {
            this.apiResponse= response.message ;
            this.isLoading =false ;
            console.log(this.apiResponse);
        

            if (this.apiResponse = 'sucsses'){
            this._Router.navigate(['/login']);
          };
        },

        error:(err) => { 
            this.apiResponse = err.error.message;
            this.isLoading =false ;
            console.log(err.message);
            
        }
      }); 
    };
  }


  logIn(formData : FormGroup){

    formData.markAllAsTouched();

    console.log(formData)
    
    if (formData.valid){ 

      this.isLoading = true ;

        this._AuthenService.logIN(formData.value).subscribe({
            next: (response) =>{ 
              this.apiResponse = response.message;
              this.isLoading =false;
              console.log(response);
              

            if(this.apiResponse = 'success'){
              
              // it must be true to (enableNavBar / and the guard be true to move to homeComp)
              this._AuthenService.isLogin.next(true);
              this._Router.navigate(['/home']);
            
              localStorage.setItem('token' , response.token.token)

            

              let decodedToken : any = jwtDecode(response.token.token) ; 
              console.log(decodedToken)
            }
            
            } ,
            error : (err) => {
              this.apiResponse = err.error.message;
              this.isLoading =false;
           }
          })}


  }





  toggleForm() {
    this.isRegistered = !this.isRegistered;
  }

}

