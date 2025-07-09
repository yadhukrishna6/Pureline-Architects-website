import { Component, AfterViewInit, ElementRef } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); // ← Important!

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  isVisible = true;

subtitles = [
  'Architecture for the future,<br>blending innovation with timeless design.',
  'Designing your dreams into reality,<br>one detail at a time.',
  'Building with passion,<br>precision, and a commitment to excellence.'
];
currentSubtitle = this.subtitles[0];
  private subtitleIndex = 0;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const hero = this.el.nativeElement;
    const heroTitle = hero.querySelector('.hero-title');
    const heroSubtitle = hero.querySelector('.hero-subtitle');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top center',
      }
    });

    tl.from([heroTitle, heroSubtitle], {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0
    });

    this.cycleSubtitles(heroSubtitle);
  }
cycleSubtitles(heroSubtitle: HTMLElement) {
  setInterval(() => {
    gsap.to(heroSubtitle, {
      opacity: 1,
      duration: 1.8, // slower fade out
      ease: 'power2.inOut',
      onComplete: () => {
        this.subtitleIndex = (this.subtitleIndex + 1) % this.subtitles.length;
        this.currentSubtitle = this.subtitles[this.subtitleIndex];
        gsap.fromTo(heroSubtitle,
          { opacity: 2 },
          { opacity: 2, duration: 1.8, ease: 'power2.inOut' } // fade in only
        );
      }
    });
  }, 3000);
}
scrollToTarget(id: string) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

scrollToAboutUs() {
  console.log('GSAP Scroll called');

  gsap.to(window, {
    duration: 1.2,
    scrollTo: {
      y: '#aboutus',
      offsetY: 80 // if you have fixed navbar
    },
    ease: 'power4.inOut',
  });
}





}