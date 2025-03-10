import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homeslider',
  standalone:true,
  imports: [CarouselModule],
  templateUrl: './homeslider.component.html',
  styleUrl: './homeslider.component.scss'
})
export class HomesliderComponent {
  customOptions: OwlOptions = {
    rtl:true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
     
    },
    nav: true
  }

}
