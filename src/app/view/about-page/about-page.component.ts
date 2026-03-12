import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-page',
  standalone: false,
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements AfterViewInit, OnDestroy {

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  private initAnimations(): void {
    // Hero Text Animation
    gsap.from('.stagger-reveal', {
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: 'power3.out'
    });

    // Scroll-triggered staggered reveal for items
    gsap.utils.toArray('section').forEach((section: any) => {
      const items = section.querySelectorAll('.stagger-item');
      if (items.length > 0) {
        gsap.from(items, {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        });
      }
    });

    // Parallax effect for narrative image
    gsap.to('.narrative-image img', {
      scale: 1.1,
      scrollTrigger: {
        trigger: '.about-narrative',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
}
