import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { PROJECTS } from '../../shared/data/projects.data';
import { Router } from '@angular/router';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-our-projects',
  standalone: false,
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.scss'],
})
export class OurProjectsComponent implements AfterViewInit {
  @ViewChild('recentWorks', { static: true }) recentWorks!: ElementRef;
  @ViewChild('scrollSection', { static: true }) scrollSection!: ElementRef;
  @ViewChild('outerWrapper', { static: true }) outerWrapper!: ElementRef;
  @ViewChild('floatingBtn', { static: true }) floatingBtn!: ElementRef;
  @ViewChildren('parallaxImage') parallaxImages!: QueryList<ElementRef>;

  constructor(private router: Router) {}

  projects = PROJECTS;

  goToDetail(id: number) {
    this.router.navigate(['/projects', id]);
  }

  ngAfterViewInit(): void {
    const scrollContainer = this.scrollSection.nativeElement;
    const totalSlides = scrollContainer.children.length;
   const scrollAmount = window.innerWidth * (this.projects.length - 1);

    // Animate recentWorks header out
    const recentHeader = this.recentWorks.nativeElement.querySelector('.recent-works-header');
    if (recentHeader) {
      gsap.to(recentHeader, {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: this.recentWorks.nativeElement,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // Scale featured-works section in
    gsap.to(this.outerWrapper.nativeElement, {
      scale: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: this.recentWorks.nativeElement,
        start: 'bottom bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Horizontal scroll effect
   gsap.to(this.scrollSection.nativeElement, {
  x: () => `-${scrollAmount}px`,
  ease: 'none',
  scrollTrigger: {
    trigger: this.outerWrapper.nativeElement,
    start: 'top top',
    end: () => `+=${scrollAmount}`,
    scrub: 1,
    pin: true,
    anticipatePin: 1,
  },
});

    // Floating button visibility inside horizontal scroll
    ScrollTrigger.create({
      trigger: this.outerWrapper.nativeElement,
      start: 'top top',
      end: () => `+=${scrollAmount}`,
      onEnter: () =>
        gsap.to(this.floatingBtn.nativeElement, { opacity: 1, duration: 0.3 }),
      onLeave: () =>
        gsap.to(this.floatingBtn.nativeElement, { opacity: 0, duration: 0.3 }),
      onEnterBack: () =>
        gsap.to(this.floatingBtn.nativeElement, { opacity: 1, duration: 0.3 }),
      onLeaveBack: () =>
        gsap.to(this.floatingBtn.nativeElement, { opacity: 0, duration: 0.3 }),
    });

    // Floating button follows mouse
    document.addEventListener('mousemove', (e: MouseEvent) => {
      gsap.to(this.floatingBtn.nativeElement, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    // Parallax effect on background images
    this.parallaxImages.forEach((imgRef) => {
      gsap.to(imgRef.nativeElement, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: this.outerWrapper.nativeElement,
          start: 'top top',
          end: () => `+=${scrollAmount}`,
          scrub: 1,
        },
      });
    });
  }
}
