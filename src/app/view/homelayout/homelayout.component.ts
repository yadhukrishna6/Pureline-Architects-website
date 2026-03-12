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
    const card2BgMask = el.querySelector('.card-2-bg-mask');
    const aboutCard = el.querySelector('.about-card');
    const headingBig = el.querySelector('#headingBig');
    const headingSmall = el.querySelector('#headingSmall');
    const headingText = el.querySelector('#headingText');
    const bannerBigimg = el.querySelector('#bannerBigimg');

    // 👇 Separate GSAP timeline for the wrapper
    gsap.timeline({
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: '+=500%', // Increased duration further to ensure all animations are reachable
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
      .to(card2BgMask, {
        x: 0,
        y: 0,
        ease: 'power2.out',
        duration: 2
      }, '<')
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
      .to(card2BgMask, {
        yPercent: -100,
        ease: 'none',
        duration: 2
      }, '<')
      .fromTo(aboutCard,
        { xPercent: 100, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          ease: 'power2.out',
          duration: 2
        },
        '<'
      )
      // 👇 Internal About Section Animations - ensure they start AFTER the section has finished sliding in
      .fromTo(headingBig, {
        scale: 0.5,
        opacity: 0
      }, {
        scale: 1,
        opacity: 0.6,
        ease: 'power2.out',
        duration: 2
      }, '+=0.2') // Added delay after section transition
      .fromTo([headingSmall, headingText], {
        x: -50,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        ease: 'power2.out',
        duration: 1.5
      }, '>') // Explicitly start after headingBig
      .fromTo(bannerBigimg, {
        yPercent: 50,
        opacity: 0
      }, {
        yPercent: 0,
        opacity: 1,
        ease: 'power2.out',
        duration: 2
      }, '<');

    ScrollTrigger.refresh();
  }

}