import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MenProductsService } from '../../Services/men-products.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit {

  @Input() newInProducts:IProduct[]=[];

   //carousel options
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplaySpeed: 1500,
      autoplayHoverPause: true,
      nav: false,
      navSpeed: 700,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 2,
        },
        740: {
          items: 3,
        },
        940: {
          items: 4,
        }
      },
    }

  constructor() { }
  
  ngOnInit(): void {}


}
