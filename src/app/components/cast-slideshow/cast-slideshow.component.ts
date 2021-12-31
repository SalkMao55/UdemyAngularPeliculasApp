import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit,  AfterViewInit {
  
  // Data get from PAGE that will use this component
  @Input() declare cast: Cast[];
  // Swiper
  public swiper?: Swiper;

  constructor() { }

  ngOnInit(): void {
    //console.log(this.cast);
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      slidesPerView: 5.3,
      freeMode:true,
      spaceBetween:15,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
    // Otra coas
  }

  onSlideNext() {
    this.swiper?.slideNext();
  }

  onSlidePrev() {
    this.swiper?.slidePrev();
  }

}
