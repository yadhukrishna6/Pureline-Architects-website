import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements AfterViewInit {
  @ViewChild('aboutLeft') aboutLeft!: ElementRef;
  @ViewChild('aboutRight') aboutRight!: ElementRef;

  ngAfterViewInit(): void {
   
    gsap.from(this.aboutLeft.nativeElement, {
      scrollTrigger: {
        trigger: this.aboutLeft.nativeElement,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });

    gsap.from(this.aboutRight.nativeElement, {
      scrollTrigger: {
        trigger: this.aboutRight.nativeElement,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });
  }
}