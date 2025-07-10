import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-card-section',
  standalone: false,
  templateUrl: './card-section.component.html',
  styleUrl: './card-section.component.scss'
})
export class CardSectionComponent  implements AfterViewInit {
  @ViewChild('ctaSection', { static: true }) ctaSection!: ElementRef;
  @ViewChild('parallaxBg', { static: true }) parallaxBg!: ElementRef;

  ngAfterViewInit(): void {
    // Parallax effect on background
    gsap.to(this.parallaxBg.nativeElement, {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: this.ctaSection.nativeElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Fade-in animation for content
    gsap.from(this.ctaSection.nativeElement.querySelector('.cta-content'), {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.ctaSection.nativeElement,
        start: 'top 80%',
      },
    });
  }
}