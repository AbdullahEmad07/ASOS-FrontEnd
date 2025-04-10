import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './Men.component.html',
  styleUrls: ['./Men.component.css']
})
export class MenComponent implements AfterViewInit {
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

  constructor(private renderer: Renderer2) {}


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
