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

    if (!heroSection) return;

    // 👇 Separate GSAP timeline for the wrapper
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: '+=500%', 
        pin: true,
        scrub: true,
      }
    });

    if (heroImg) {
      tl.to(heroImg, {
        scale: 2,
        z: 350,
        transformOrigin: 'center center',
        ease: 'power1.inOut'
      });
    }

    if (card1) {
      tl.fromTo(card1, {
        opacity: 0,
        y: 100
      }, {
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        duration: 1
      }, '<+0.2');
    }

    if (card2 && card2BgMask) {
      tl.fromTo(card2, {
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
      }, '<');
    }

    if (card1) {
      tl.to(card1, {
        xPercent: -170,
        ease: 'power2.inOut',
        duration: 2
      }, '<');
    }

    if (card2) {
      tl.to(card2, {
        yPercent: -200,
        ease: 'none',
        duration: 2
      });
    }

    if (card2BgMask) {
      tl.to(card2BgMask, {
        yPercent: -100,
        ease: 'none',
        duration: 2
      }, '<');
    }

    if (aboutCard) {
      tl.fromTo(aboutCard,
        { xPercent: 100, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          ease: 'power2.out',
          duration: 1.5
        },
        '<'
      );
    }

    if (headingBig) {
      tl.fromTo(headingBig, {
        scale: 0.8,
        opacity: 0,
        filter: 'blur(20px)'
      }, {
        scale: 1,
        opacity: 0.2,
        filter: 'blur(0px)',
        ease: 'expo.out',
        duration: 2.2
      }, '+=0.1');
    }

    const headingGroup = [headingSmall, headingText].filter(e => e !== null);
    if (headingGroup.length > 0) {
      tl.fromTo(headingGroup, {
        y: 60,
        rotationX: 30,
        opacity: 0
      }, {
        y: 0,
        rotationX: 0,
        opacity: 1,
        stagger: 0.3,
        ease: 'expo.out',
        duration: 2
      }, '<+0.4');
    }

    if (bannerBigimg) {
      tl.fromTo(bannerBigimg, {
        opacity: 0,
        scale: 1.15,
        clipPath: 'inset(0% 100% 0% 0%)'
      }, {
        opacity: 1,
        scale: 1,
        clipPath: 'inset(0% 0% 0% 0%)',
        ease: 'expo.inOut',
        duration: 2.5
      }, '<+0.3');
    }

    ScrollTrigger.refresh();
  }

}