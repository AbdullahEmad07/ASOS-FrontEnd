import { Component } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent {
  mainImage: string = '../../../assets/1.jpg';
  thumbnails: string[] = [
    '../../../assets/2.jpg',
    '../../../assets/11.jpg',
    './../../assets/2.jpg',
    '../../../assets/3.jpg'
  ];

  setMainImage(image: string) {
    this.mainImage = image;
  }
}
