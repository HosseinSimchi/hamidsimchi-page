import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  signal,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { register } from 'swiper/element/bundle';
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  // Swiper modules
  modules = [Navigation, Pagination, EffectCoverflow, Autoplay];

  swiperConfig: SwiperOptions = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: { clickable: true },
    // navigation: true,
    // Autoplay configuration
    autoplay: {
      delay: 3000, // 3 seconds between slides
      disableOnInteraction: false, // continue autoplay after user interaction
      pauseOnMouseEnter: true, // pause when mouse hovers over swiper
    },
    loop: true, // Enable looping for continuous autoplay
    speed: 1000, // Transition speed in milliseconds
  };

  // Slide content
  slides = [
    'https://picsum.photos/600/400?image=1',
    'https://picsum.photos/600/400?image=2',
    'https://picsum.photos/600/400?image=3',
    'https://picsum.photos/600/400?image=4',
    'https://picsum.photos/600/400?image=4',
    'https://picsum.photos/600/400?image=4',
    'https://picsum.photos/600/400?image=4',
    'https://picsum.photos/600/400?image=4',
    'https://picsum.photos/600/400?image=4',
    'https://picsum.photos/600/400?image=4',
    'https://picsum.photos/600/400?image=4',
  ];

  ngAfterViewInit() {
    // Register Swiper web component
    register();

    // Initialize Swiper manually
    setTimeout(() => {
      if (this.swiperContainer?.nativeElement) {
        Object.assign(this.swiperContainer.nativeElement, this.swiperConfig);
        this.swiperContainer.nativeElement.initialize();
      }
    });
  }

  // swiperConfig: SwiperOptions = {
  //   effect: 'coverflow',
  //   grabCursor: true,
  //   centeredSlides: true,
  //   slidesPerView: 'auto',
  //   coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: true,
  //   },
  //   pagination: true,
  //   modules: [EffectCoverflow, Pagination],
  // };
  protected readonly title = signal('hrnews');
}
