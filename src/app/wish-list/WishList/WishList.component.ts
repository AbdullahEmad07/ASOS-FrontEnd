import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../Services/wish-list.service';
import { IProduct } from '../../Models/iproduct';



@Component({
  selector: 'app-WishList',
  templateUrl: './WishList.component.html',
  styleUrls: ['./WishList.component.css']
})
export class WishListComponent implements OnInit {
  wishListProducts:IProduct[] = [] ;
  isLoading: boolean = false;

  constructor(private wishListService: WishListService) { }

  ngOnInit() {
    this.loadWishListProducts();
  }

  get hasProducts(): boolean {
    return this.wishListProducts?.length > 0;
  }

  loadWishListProducts() {
    this.isLoading = true;
    this.wishListService.getWishListProducts().subscribe({
      next: (response) => {
        this.wishListProducts = response.data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching wishlist:', error);
        this.isLoading = false;
      }
    });
  }

  removeFromWishList(productId: string) {
    this.wishListService.removeFromWishList(productId).subscribe({
      next: () => {
        this.loadWishListProducts();
      },
      error: (error) => {
        console.error('Error removing from wishlist:', error);
      }
    });
  }
}