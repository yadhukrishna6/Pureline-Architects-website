import {
  Component,
  QueryList,
  ViewChildren,
  ElementRef,
  AfterViewInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-our-service',
  standalone: false,
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss'],
})
export class OurServiceComponent implements AfterViewInit {
 @ViewChild('serviceTabs', { static: true }) serviceTabs!: ElementRef;
  @ViewChild('servicePreview', { static: true }) servicePreview!: ElementRef;

  activeIndex = 0;

  services = [
    {
      number: '01',
      title: 'Strategic Construction Planning',
      description: 'Comprehensive early-stage planning and coordination to align on budgets, timelines, and design objectives.',
      image: 'assets/serviceImages/construction.webp'
    },
    {
      number: '02',
      title: 'Creative Interior Design',
      description: 'We manage day-to-day construction activities with a focus on design excellence, safety, and efficiency.',
      image: 'assets/serviceImages/service_interior.webp'
    },
    {
      number: '03',
      title: 'Modern Landscaping Solutions',
      description: 'A unified approach blending design and execution teams under one streamlined contract for flawless delivery.',
      image: 'assets/serviceImages/landscaping.webp'
    },
    {
      number: '04',
      title: 'Innovative Architecture Services',
      description: 'Sustainable and resource-efficient architectural practices using modern materials and smart systems.',
      image: 'assets/serviceImages/Architecture.webp'
    },
    {
      number: '05',
      title: 'Expert Project Consultation',
      description: 'Leveraging cutting-edge technologies for automation, energy efficiency, and superior user experience.',
      image: 'assets/serviceImages/consultancy.webp'
    }
  ];

  
  ngAfterViewInit() {
    gsap.from(this.serviceTabs.nativeElement, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: this.serviceTabs.nativeElement,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(this.servicePreview.nativeElement, {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      delay: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: this.servicePreview.nativeElement,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }

  setActive(index: number) {
    this.activeIndex = index;
  }

}