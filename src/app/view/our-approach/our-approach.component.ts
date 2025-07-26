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

  @ViewChild('serviceTabs', { static: true }) serviceTabs!: ElementRef;
  @ViewChild('servicePreview', { static: true }) servicePreview!: ElementRef;

  activeIndex = 0;

  services = [
    {
      number: '01',
      title: 'Survey',
      description: 'After surveying and obtaining the necessary information, we will create a preliminary design including technical drawings, 3D images of the interior and provide a 3D VR experience to help customers get a visual view of their project.',
      image: 'assets/serviceImages/construction.webp'
    },
    {
      number: '02',
      title: 'Design Concept',
      description: 'In this phase, we create a tailored design solution. Our team develops technical drawings, 3D renderings, and mood boards to help you visualize the space. We also offer a 3D VR walkthrough, allowing you to experience the layout before any physical changes are made.',
      image: 'assets/serviceImages/service_interior.webp'
    },
    {
      number: '03',
      title: 'implementation',
      description: 'This is where design meets execution. We manage procurement, construction, and coordinate with contractors to ensure the design is accurately brought to life. Quality control checks are performed at every stage to maintain the highest standards.',
      image: 'assets/serviceImages/landscaping.webp'
    },
    {
      number: '04',
      title: 'Quality Check ',
      description: 'Before final handover, we conduct thorough inspections and testing to ensure every detail aligns with the original design intent. We also integrate and calibrate smart systems such as lighting, security, and HVAC for seamless functionality and client satisfaction.',
      image: 'assets/serviceImages/Architecture.webp'
    },
    {
      number: '05',
      title: 'handover',
      description: 'The final stage involves a detailed review and client walkthrough. We resolve any pending touch-ups and ensure everything is completed to satisfaction. A final package including drawings, warranties, and care guides is also provided for future reference.',
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