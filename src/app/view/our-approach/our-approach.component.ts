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
      image: 'https://images.unsplash.com/photo-1581674662583-5e89b374fae6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VydmV5JTIwYXJjaGl0ZWN0fGVufDB8fDB8fHww'
    },
    {
      number: '02',
      title: 'Design Concept',
      description: 'In this phase, we create a tailored design solution. Our team develops technical drawings, 3D renderings, and mood boards to help you visualize the space. We also offer a 3D VR walkthrough, allowing you to experience the layout before any physical changes are made.',
      image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'This is where design meets execution. We manage procurement, construction, and coordinate with contractors to ensure the design is accurately brought to life. Quality control checks are performed at every stage to maintain the highest standards.',
      image: 'https://plus.unsplash.com/premium_photo-1681823190171-04da61c893b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltcGxlbWVudGF0aW9uJTIwYXJjaGl0ZWN0fGVufDB8fDB8fHww'
    },
    {
      number: '04',
      title: 'Quality Check ',
      description: 'Before final handover, we conduct thorough inspections and testing to ensure every detail aligns with the original design intent. We also integrate and calibrate smart systems such as lighting, security, and HVAC for seamless functionality and client satisfaction.',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '05',
      title: 'Handover',
      description: 'The final stage involves a detailed review and client walkthrough. We resolve any pending touch-ups and ensure everything is completed to satisfaction. A final package including drawings, warranties, and care guides is also provided for future reference.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
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
    if (this.activeIndex === index) return;
    
    this.activeIndex = index;
    
    // Animate the image swap
    const img = this.servicePreview.nativeElement.querySelector('.service-image');
    if (img) {
      gsap.fromTo(img, 
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
      );
    }
  }

}