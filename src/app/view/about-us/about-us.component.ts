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
export class AboutUsComponent implements AfterViewInit, OnDestroy {

  @ViewChild('aboutContainer', { static: true }) aboutContainer!: ElementRef;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const el = this.elRef.nativeElement;
      const elr = this.aboutContainer.nativeElement;
 gsap.fromTo(elr,
      { x: '100vw', opacity: 0 },
      {
        x: '0vw',
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          end: 'top 60%',
          scrub: false,
          toggleActions: 'play none none reverse'
        }
      });
    // Banner Big Image
    gsap.to(el.querySelector('#bannerBigimg'), {
      duration: 2,
      yPercent: 150,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 1,
      repeatRefresh: true
    });

    // Banner Big Text
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

    // Banner Design Text
    gsap.to(el.querySelector('#headingSmall'), { delay: 1.2, opacity: 0 });
    gsap.to(el.querySelector('#headingSmall'), { delay: 2, left: '-100vw' });
    gsap.to(el.querySelector('#headingSmall'), {
      delay: 3.6,
      duration: 1.8,
      left: 0,
      opacity: 1
    });

    // Banner Small Text
    gsap.to(el.querySelector('#headingText'), { delay: 1.2, opacity: 0 });
    gsap.to(el.querySelector('#headingText'), { delay: 2, left: '-100vw' });
    gsap.to(el.querySelector('#headingText'), {
      delay: 3.6,
      duration: 1.8,
      left: 0,
      opacity: 1
    });

    // Scroll-triggered animations
    this.animateScrollTrigger(el);
  }

  animateScrollTrigger(el: HTMLElement): void {
    const gsapSet = (selector: string, vars: any) => gsap.set(el.querySelectorAll(selector), vars);
    const gsapTo = (selector: string, vars: any) => gsap.to(el.querySelectorAll(selector), vars);

    // Company Section
    gsapSet('.company-section .title, #compDescription', { opacity: 0, y: -200 });
    gsapTo('.company-section .title, #compDescription', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.company-section',
        start: 'top center',
        end: 'center'
      }
    });

    gsapSet('.compy-box', { opacity: 0, scale: 0 });
    gsapTo('.compy-box', {
      duration: 1.6,
      delay: 0.1,
      opacity: 1,
      scale: 1,
      transformOrigin: 'top right',
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.company-section',
        start: 'top center',
        end: 'center'
      }
    });

    // Designer Section
    gsapSet('.designer-section .title, #designDescription', { y: -200, opacity: 0 });
    gsapTo('.designer-section .title, #designDescription', {
      duration: 1.6,
      y: 0,
      opacity: 1,
      ease: 'power2.inOut',
      yoyo: true,
      scrollTrigger: {
        trigger: '.designer-section',
        start: 'top center',
        end: 'center'
      }
    });

    gsapSet('.box-border', { opacity: 0, scale: 0.6, rotate: 15 });
    gsapTo('.box-border', {
      duration: 1.5,
      opacity: 1,
      scale: 1,
      rotate: 0,
      ease: 'power.inOut',
      yoyo: true,
      scrollTrigger: {
        trigger: '.designer-section',
        start: 'top center',
        end: 'center'
      }
    });

    gsapSet('.team1, .team3', { opacity: 0, rotate: 45, scale: 0.5 });
    gsapTo('.team1, .team3', {
      duration: 1.6,
      delay: 0.2,
      opacity: 1,
      rotate: 0,
      scale: 1,
      ease: 'power2.inOut',
      transformOrigin: 'top',
      yoyo: true,
      scrollTrigger: {
        trigger: '.designer-section',
        start: 'top center',
        end: 'center'
      }
    });

    gsapSet('.team2', { opacity: 0, rotate: -45, scale: 0.5 });
    gsapTo('.team2', {
      duration: 1.6,
      delay: 0.2,
      opacity: 1,
      rotate: 0,
      scale: 1,
      ease: 'power2.inOut',
      transformOrigin: 'top',
      yoyo: true,
      scrollTrigger: {
        trigger: '.designer-section',
        start: 'top center',
        end: 'center'
      }
    });

    // Projects Section
    gsapSet('.projects-section .title', { y: -200, opacity: 0 });
    gsapTo('.projects-section .title', {
      duration: 1.6,
      y: 0,
      opacity: 1,
      ease: 'power2.inOut',
      yoyo: true,
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top center',
        end: 'center'
      }
    });

    gsapSet('.pbox-left', { opacity: 0, x: -800 });
    gsapTo('.pbox-left', {
      duration: 1.6,
      x: 0,
      opacity: 1,
      scale: 1,
      ease: 'power2.inOut',
      yoyo: true,
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top center',
        end: 'center'
      }
    });

    gsapSet('.pbox-right', { x: 500 });
    gsapTo('.pbox-right', {
      duration: 1.6,
      x: 0,
      ease: 'power2.inOut',
      yoyo: true,
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top center',
        end: 'center'
      }
    });

    gsapSet('.project-content', { x: -200, y: -200, opacity: 0 });
    gsapTo('.project-content', {
      duration: 1.6,
      x: 0,
      y: 0,
      opacity: 1,
      delay: 0.2,
      ease: 'power2.inOut',
      yoyo: true,
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top center',
        end: 'center'
      }
    });

    // Testimonial Section
    gsapSet('.testimonial-section .title', { y: -200, opacity: 0 });
    gsapTo('.testimonial-section .title', {
      duration: 1.6,
      y: 0,
      opacity: 1,
      ease: 'power2.inOut',
      yoyo: true,
      scrollTrigger: {
        trigger: '.testimonial-section',
        start: 'top center',
        end: 'center'
      }
    });

    gsapSet('.left-row', { opacity: 0, xPercent: -100 });
    gsapTo('.left-row', {
      duration: 1.6,
      opacity: 1,
      xPercent: 0,
      ease: 'power2.inOut',
      yoyo: true,
      scrollTrigger: {
        trigger: '.testimonial-section',
        start: 'top center',
        end: 'center'
      }
    });

    gsapSet('.right-row', { opacity: 0, xPercent: 100 });
    gsapTo('.right-row', {
      duration: 1.6,
      opacity: 1,
      xPercent: 0,
      ease: 'power2.inOut',
      yoyo: true,
      scrollTrigger: {
        trigger: '.testimonial-section',
        start: 'top center',
        end: 'center'
      }
    });

    // Contact Section
    gsapSet('.contact-box, .contact-border', { opacity: 0, scale: 0 });
    gsapTo('.contact-box, .contact-border', {
      duration: 1.6,
      opacity: 1,
      scale: 1,
      transformOrigin: 'top right',
      ease: 'power2.inOut',
      yoyo: true,
      scrollTrigger: {
        trigger: '.contact-us',
        start: 'top center',
        end: 'bottom'
      }
    });
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
}