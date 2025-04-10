import { Component, OnInit , ViewChild ,ElementRef ,Renderer2} from '@angular/core';

@Component({
  selector: 'app-Women',
  templateUrl: './Women.component.html',
  styleUrls: ['./Women.component.css']
})
export class WomenComponent implements OnInit {
  @ViewChild('mediaCarousel', { static: false }) mediaCarousel!: ElementRef;
  @ViewChild('animatedText', { static: false }) animatedText!: ElementRef;
textArray: string[] = [
    "UP TO 30% OFF 1000$ OF",
    "STYLES"
  ];
  currentTextIndex: number = 0;
  index: number = 0;

  constructor(private renderer: Renderer2) {}

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
  ngOnInit() {
  }

}
