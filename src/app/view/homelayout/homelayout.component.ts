import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); 

@Component({
  selector: 'app-homelayout',
  standalone: false,
  templateUrl: './homelayout.component.html',
  styleUrl: './homelayout.component.scss'
})
export class HomelayoutComponent implements AfterViewInit {
   @ViewChild('aboutContainer', { static: true }) aboutContainer!: ElementRef;
  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
  const el = this.elRef.nativeElement;

  const banner = el.querySelector('.banner');
  const heroSection = el.querySelector('.wrapper');
  const heroImg = el.querySelector('.hero-img');
  const card1 = el.querySelector('.card-1');
  const card2 = el.querySelector('.card-2');
  const aboutCard = el.querySelector('.about-card');

  // 👇 This only triggers banner animations
  ScrollTrigger.create({
    trigger: banner,
    start: 'top center',
    onEnter: () => {
      this.animateBanner(el);
    },
    onEnterBack: () => {
      this.animateBanner(el);
    },
    once: false
  });

  // 👇 Separate GSAP timeline for the wrapper
  gsap.timeline({
    scrollTrigger: {
      trigger: heroSection,
      start: 'top top',
      end: '+=300%',
      pin: true,
      scrub: true,
    }
  })
    .to(heroImg, {
      scale: 2,
      z: 350,
      transformOrigin: 'center center',
      ease: 'power1.inOut'
    })
    .fromTo(card1, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      duration: 1
    }, '<+0.2')
    .fromTo(card2, {
      yPercent: 100
    }, {
      yPercent: 0,
      ease: 'power2.out',
      duration: 2
    }, '+=0.5')
    .to(card1, {
      xPercent: -170,
      ease: 'power2.inOut',
      duration: 2
    }, '<')
    .to(card2, {
      yPercent: -200,
      ease: 'none',
      duration: 2
    })
    .fromTo(aboutCard,
      { xPercent: 100, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        ease: 'power2.out',
        duration: 2
      },
      '<+0.5'
    );

  ScrollTrigger.refresh();
}
animateBanner(el: HTMLElement) {
  gsap.set(el.querySelector('#headingSmall'), { left: 0, opacity: 1 });
  gsap.set(el.querySelector('#headingText'), { left: 0, opacity: 1 });

  gsap.to(el.querySelector('#bannerBigimg'), {
    duration: 2,
    yPercent: 150,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: 1,
    repeatRefresh: true
  });

  gsap.to(el.querySelector('#headingBig'), {
    duration: 1.5,
    scale: 2,
    delay: 0.8,
    transformOrigin: 'top left',
    ease: 'power2.inOut',
    yoyo: true,
    repeat: 1,
    repeatRefresh: true
  });

  gsap.to(el.querySelector('#headingSmall'), { delay: 1.2, opacity: 0 });
  gsap.to(el.querySelector('#headingSmall'), { delay: 2, left: '-100vw' });
  gsap.to(el.querySelector('#headingSmall'), {
    delay: 3.6,
    duration: 1.8,
    left: 0,
    opacity: 1
  });

  gsap.to(el.querySelector('#headingText'), { delay: 1.2, opacity: 0 });
  gsap.to(el.querySelector('#headingText'), { delay: 2, left: '-100vw' });
  gsap.to(el.querySelector('#headingText'), {
    delay: 3.6,
    duration: 1.8,
    left: 0,
    opacity: 1
  });
}

}