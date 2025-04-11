import { IProduct } from '../../Models/iproduct';
import { MenProductsService } from './../../Services/men-products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-M-clothing',
  templateUrl: './M-clothing.component.html',
  styleUrls: ['./M-clothing.component.css']
})
export class MClothingComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private _MenProductsService : MenProductsService) { }

  ngOnInit() {

    this._MenProductsService.getMenClothingProduct().subscribe({
      next: (response) => {
        this.products = response.data;
        console.log(this.products);
      }

    })
  }

}
