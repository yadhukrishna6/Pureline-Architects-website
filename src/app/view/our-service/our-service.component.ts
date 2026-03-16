import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-our-service',
  standalone:false,
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss'],
})
export class OurServiceComponent implements AfterViewInit, OnDestroy {
  @ViewChild('serviceSection') serviceSection!: ElementRef;
  @ViewChild('floatingBtn') floatingBtn!: ElementRef;
  @ViewChildren('serviceCard') serviceCards!: QueryList<ElementRef>;
  private removeMouseMove?: () => void;

  ngAfterViewInit(): void {
    if (window.innerWidth <= 1024) {
      return;
    }

    const floatingEl = this.floatingBtn?.nativeElement;
    if (!floatingEl) return;
    const moveHandler = (e: MouseEvent) => {
      gsap.to(floatingEl, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    window.addEventListener('mousemove', moveHandler);
    this.removeMouseMove = () => window.removeEventListener('mousemove', moveHandler);

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

      // New: Animate the visual container reveal
      const visual = card.nativeElement.querySelector('.visual-container');
      if (visual) {
        gsap.from(visual, {
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card.nativeElement,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      }
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

  ngOnDestroy(): void {
    this.removeMouseMove?.();

    if (!this.serviceSection) {
      return;
    }

    ScrollTrigger.getAll()
      .filter((trigger) => {
        const triggerElement = trigger.trigger;
        return triggerElement instanceof Element && this.serviceSection.nativeElement.contains(triggerElement);
      })
      .forEach((trigger) => trigger.kill());
  }
}
