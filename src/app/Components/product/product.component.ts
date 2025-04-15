import { Component ,ElementRef, ViewChild, Renderer2, AfterViewInit, OnInit, Input  } from '@angular/core';
import { MenProductsService } from '../../Services/men-products.service';
import { IProduct } from '../../Models/iproduct';
import { WishListService } from '../../Services/wish-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit, AfterViewInit  {
  @Input() product: IProduct = {} as IProduct; 
  loggedUserToken: string | null = null;
  wishListProductsId: string[] = []; // Initialize as empty array
  

  constructor(private _MenProductsService:MenProductsService, private _WishListService:WishListService,  private toastr:ToastrService){}

  ngOnInit(): void {
    this.loggedUserToken = localStorage.getItem('token');
    if (this.loggedUserToken) {
      this.GetWishListProducts();
    }
  }


  AddToWishList(productId:any){
    if (!this.loggedUserToken) {
      this.toastr.error('Please login first');
      return;
    }

    this._WishListService.addToWishList(productId).subscribe({
      next: (response) => { 
        this.showSuccess();
        this.GetWishListProducts();
      },
      error: (err) => {
        this.toastr.error('Failed to add to wishlist');
      }
    });
  }

  removeFromWishList(productId: string) {
    this._WishListService.removeFromWishList(productId).subscribe({
      next: (response) => {
        // console.log(response);
        this.showError();
        this.GetWishListProducts();          
      },
      error: (error) => {
        console.error('Error removing from wishlist:', error);
      }
    });
  }



  GetWishListProducts(){
    this._WishListService.getWishListProducts().subscribe({
      next: (response) => { 
        if (response && response.data) {
          this.wishListProductsId = response.data.map((product: any) => product.id);
          console.log('Wishlist product IDs:', this.wishListProductsId);
        }
      },
      error: (error) => {
        console.error('Error fetching wishlist:', error);
        this.toastr.error('Failed to fetch wishlist');
      }
    });
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


  showSuccess() {
    this.toastr.success('Product Added To Wish List');
  }

  showError() {
    this.toastr.error('Product Removed To Wish List');
  }
}
