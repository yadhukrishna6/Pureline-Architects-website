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
      title: 'Pre-construction Planning',
      description: 'Early-stage planning and coordination to align on budgets, schedules, and design intent.',
      image: 'assets/pexels-fotoaibe-1643383.jpg'
    },
    {
      number: '02',
      title: 'General Contracting',
      description: 'We oversee day-to-day construction activities, ensuring safety, quality, and efficiency.',
      image: 'assets/pexels-valeriya-827518.jpg'
    },
    {
      number: '03',
      title: 'Design-Build',
      description: 'A unified approach combining design and construction teams under one contract for streamlined project delivery.',
      image: 'assets/pexels-fotoaibe-1643383.jpg'
    },
    {
      number: '04',
      title: 'Sustainable Building',
      description: 'Environmentally responsible and resource-efficient building practices, materials, and systems.',
      image: 'assets/pexels-valeriya-827518.jpg'
    },
    {
      number: '05',
      title: 'Smart Building Technology',
      description: 'Integrating advanced technologies for building automation, energy efficiency, and enhanced occupant experience.',
      image: 'assets/pexels-fotoaibe-1643383.jpg'
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