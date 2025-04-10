import { Component ,ElementRef, ViewChild, Renderer2, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements AfterViewInit  {

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
