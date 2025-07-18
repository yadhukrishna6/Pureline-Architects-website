import { AfterViewInit, Component, ElementRef } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); // ← Important!

@Component({
  selector: 'app-homelayout',
  standalone: false,
  templateUrl: './homelayout.component.html',
  styleUrl: './homelayout.component.scss'
})
export class HomelayoutComponent implements AfterViewInit {
 
  constructor(private elRef: ElementRef) { }
  ngAfterViewInit(): void {


    console.clear();

    gsap.timeline({
      scrollTrigger: {
        trigger: this.elRef.nativeElement.querySelector('.wrapper'),
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: true,
        markers: true
      }
    })
      .to(this.elRef.nativeElement.querySelector('img'), {
        scale: 2,
        z: 350,
        transformOrigin: 'center center',
        ease: 'power1.inOut'
      })
      .to(
        this.elRef.nativeElement.querySelector('.section.hero'),
        {
          scale: 1.1,
          transformOrigin: 'center center',
          ease: 'power1.inOut'
        },
        '<'
      );
    ScrollTrigger.refresh();
  }


}