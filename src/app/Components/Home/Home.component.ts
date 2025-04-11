import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
    if (window.innerWidth <= 1024) {
      const sections = document.querySelectorAll('.gender-section');
      const brandInfo = document.querySelector('.brand-info');
  
      sections.forEach(section => {
        section.addEventListener('click', () => {
          sections.forEach(sec => sec.classList.remove('active'));
          section.classList.add('active');
  
          if (brandInfo) {
            brandInfo.classList.add('hidden');
          }
        });
      });
    }
  }
  

}
