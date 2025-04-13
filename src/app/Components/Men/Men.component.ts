import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2, OnInit } from '@angular/core';
import { MenProductsService } from '../../Services/men-products.service';
import { IProduct } from '../../Models/iproduct';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-men',
  templateUrl: './Men.component.html',
  styleUrls: ['./Men.component.css']
})
export class MenComponent implements OnInit, AfterViewInit {

  products:IProduct[] = [];
  newInProducts:IProduct[]=[];

  //pagination vars
  pageSize: number = 20; // Number of items per page
  currentPage: number = 1; // Current page number
  totalItems: number = 60; // Total number of items (to be set after fetching data)



  @ViewChild('mediaCarousel', { static: false }) mediaCarousel!: ElementRef;
  @ViewChild('animatedText', { static: false }) animatedText!: ElementRef;
  likedIndexes = new Set<number>();

  toggleLike(index: number) {
    if (this.likedIndexes.has(index)) {
      this.likedIndexes.delete(index);
    } else {
      this.likedIndexes.add(index);
    }
  }
  items = Array(20).fill(0);
  textArray: string[] = [
    "UP TO 30% OFF 1000$ OF",
    "STYLES"
  ];
  currentTextIndex: number = 0;
  index: number = 0;

  constructor(private renderer: Renderer2 , private _MenProductsService:MenProductsService) {}
 
  ngOnInit(): void {

    this.GetMenNewInProducts();
    this.GetAllMenProducts(1);
   
  };

  GetMenNewInProducts() {
    this._MenProductsService.getMenNewInProducts().subscribe({
      next: (response) => {
        this.newInProducts = response.data; // Assuming the API returns total items count
        console.log(this.newInProducts);
        
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  GetAllMenProducts(pageNum:number): void {
    this._MenProductsService.getAllMenProducts(pageNum).subscribe({
      next: (response) => {
        this.products = response.data; // Assuming the API returns total items count
        console.log(this.products);
        
      },
      error: (error) => {
        console.error(error);
      }
    });
  };

  pageChanged(event:any){
    this.currentPage = event;
    this.GetAllMenProducts(event)
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

    if (this.mediaCarousel) {
      const carousel = this.mediaCarousel.nativeElement;
    }

    if (this.animatedText) {
      this.animatedText.nativeElement.textContent = " ".repeat(this.textArray[this.currentTextIndex].length);
    }

    this.animateText();
  }


  animateText(): void {
    if (this.animatedText) {
      let interval = setInterval(() => {
        if (this.index <= this.textArray[this.currentTextIndex].length) {
          this.animatedText.nativeElement.textContent = this.textArray[this.currentTextIndex].substring(0, this.index);
          this.index++;
        } else {
          setTimeout(() => {
            this.index = 0;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.textArray.length;
          }, 0);
        }
      }, 150);
    }
  }
}
