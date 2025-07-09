import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-our-approach',
  standalone: false,
  templateUrl: './our-approach.component.html',
  styleUrl: './our-approach.component.scss'
})
export class OurApproachComponent  implements AfterViewInit {
@ViewChild('approachRef', { static: true }) approachRef!: ElementRef;

 accordionItems = [
    {
      title: 'Survey',
      content: 'After surveying and obtaining the necessary information, we will create a preliminary design including technical drawings, 3D images of the interior and provide a 3D VR experience to help customers get a visual view of their project.',
      open: true
    },
    {
      title: 'Design Concept',
      content: 'In this phase, we create a tailored design solution. Our team develops technical drawings, 3D renderings, and mood boards to help you visualize the space. We also offer a 3D VR walkthrough, allowing you to experience the layout before any physical changes are made.',
      open: false
    },
    {
      title: 'implementation',
      content: 'This is where design meets execution. We manage procurement, construction, and coordinate with contractors to ensure the design is accurately brought to life. Quality control checks are performed at every stage to maintain the highest standards.',
      open: false
    },
     {
      title: 'handover',
      content: 'The final stage involves a detailed review and client walkthrough. We resolve any pending touch-ups and ensure everything is completed to satisfaction. A final package including drawings, warranties, and care guides is also provided for future reference.',
      open: false
    }
  ];

 toggleAccordion(index: number) {
  this.accordionItems = this.accordionItems.map((item, i) => ({
    ...item,
    open: i === index ? !item.open : false
  }));
}

  
  ngAfterViewInit(): void {
    const section = this.approachRef.nativeElement;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      }
    });

    timeline
      .from('.image-animate', {
        x: -100,
        scale: 1.1,
        opacity: 0.8,
        duration: 1.2,
        ease: 'power3.out'
      })
      .from('.title-animate', {
        x: 100,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=1')
      .from('.text-animate', {
        x: 100,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.6')
      .from('.accordion-animate', {
        x: 100,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.6');
  }
}