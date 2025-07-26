import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-our-service',
  standalone:false,
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss'],
})
export class OurServiceComponent  implements AfterViewInit {
   @ViewChild('serviceSection') serviceSection!: ElementRef;
  @ViewChild('floatingBtn') floatingBtn!: ElementRef;
  @ViewChildren('serviceCard') serviceCards!: QueryList<ElementRef>;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const floatingEl = this.floatingBtn.nativeElement;

    // Floating button follows mouse
    window.addEventListener('mousemove', (e) => {
      gsap.to(floatingEl, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power3.out',
      });
    });

    // Show/hide button based on section visibility
    ScrollTrigger.create({
      trigger: this.serviceSection.nativeElement,
      start: 'top center+=100',
      end: 'bottom center-=100',
      onEnter: () => this.fadeIn(floatingEl),
      onLeave: () => this.fadeOut(floatingEl),
      onEnterBack: () => this.fadeIn(floatingEl),
      onLeaveBack: () => this.fadeOut(floatingEl),
    });

    // Fade out/in after each stacked scroll
    this.serviceCards.forEach((card) => {
      ScrollTrigger.create({
        trigger: card.nativeElement,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => this.flash(floatingEl),
        onEnterBack: () => this.flash(floatingEl),
      });
    });
  }

  private fadeIn(el: HTMLElement) {
    gsap.killTweensOf(el);
    gsap.to(el, {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
      pointerEvents: 'auto',
    });
  }

  private fadeOut(el: HTMLElement) {
    gsap.killTweensOf(el);
    gsap.to(el, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out',
      pointerEvents: 'none',
    });
  }

  private flash(el: HTMLElement) {
    gsap.to(el, {
      opacity: 0,
      duration: 0.2,
      ease: 'power1.out',
      onComplete: () => {
        gsap.to(el, {
          opacity: 1,
          duration: 0.2,
          ease: 'power1.in',
        });
      },
    });
  }
}