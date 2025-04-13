import { WomenProductsService } from './../../Services/women-products.service';
import { Component, OnInit , ViewChild ,ElementRef ,Renderer2} from '@angular/core';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-Women',
  templateUrl: './Women.component.html',
  styleUrls: ['./Women.component.css']
})
export class WomenComponent implements OnInit {


  products:IProduct[] = [];
  newInProducts:IProduct[]=[];
  
  //pagination vars
  pageSize: number = 20; // Number of items per page
  currentPage: number = 1; // Current page number
  totalItems: number = 60; // Total number of items (to be set after fetching data)



  @ViewChild('mediaCarousel', { static: false }) mediaCarousel!: ElementRef;
  @ViewChild('animatedText', { static: false }) animatedText!: ElementRef;
textArray: string[] = [
    "UP TO 30% OFF 1000$ OF",
    "STYLES"
  ];
  currentTextIndex: number = 0;
  index: number = 0;

  constructor(private renderer: Renderer2 , private _WomenProductsService:WomenProductsService) {}

  ngOnInit(): void {

    this.GetWomenNewInProducts();
    this.GetAllWomenProducts(1);
   
  };

  GetWomenNewInProducts() {
    this._WomenProductsService.getWomenNewInProducts().subscribe({
      next: (response) => {
        this.newInProducts = response.data; // Assuming the API returns total items count
        console.log(this.newInProducts);
        
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  GetAllWomenProducts(pageNum:number): void {
    this._WomenProductsService.getAllWomenProducts(pageNum).subscribe({
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
    this.GetAllWomenProducts(event)
  }





  ngAfterViewInit(): void {
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
