import { Component ,ElementRef, ViewChild, Renderer2, AfterViewInit, OnInit, Input  } from '@angular/core';
import { MenProductsService } from '../../Services/men-products.service';
import { IProduct } from '../../Models/iproduct';
import { WishListService } from '../../Services/wish-list.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit, AfterViewInit  {
 
  @Input() product: IProduct = {} as IProduct; 
  loggedUserToken:any;

  constructor(private _MenProductsService:MenProductsService  , private _WishListService : WishListService){}

  ngOnInit(): void {
    this.loggedUserToken=localStorage.getItem('token')


  }

  AddToWishList(productId:any ){
    this._WishListService.addTowishList(productId).subscribe({
      next: (response) => { console.log(response);
      },
      error : (err) => {
        console.log(this.loggedUserToken);
        
        console.log(err)
        ;}
      
    })
  }


  ngAfterViewInit(): void {
    const wrappers = document.querySelectorAll('.wrapper');

    wrappers.forEach(wrapper => {
      const buyButton = wrapper.querySelector('.buy');
      const removeButton = wrapper.querySelector('.remove');
      const bottom = wrapper.querySelector('.bottom');

      if (buyButton && bottom) {
        buyButton.addEventListener('click', () => {
          bottom.classList.add('clicked');
        });
      }

      if (removeButton && bottom) {
        removeButton.addEventListener('click', () => {
          bottom.classList.remove('clicked');
        });
      }
    });
  }
}
