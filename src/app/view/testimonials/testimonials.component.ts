import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
@Component({
  selector: 'app-testimonials',
  standalone: false,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent  implements AfterViewInit {
  @ViewChild('track1', { static: true }) track1!: ElementRef;
  @ViewChild('track2', { static: true }) track2!: ElementRef;

reviews = [
  { name: 'Cameron Williamson', text: 'I was amazed at the variety of designs available. The custom options allowed me to create exactly what I wanted. My bedroom has never looked better. Thank you everything!', stars: 5 },
  { name: 'Emily Rose Thompson', text: 's amazed at the variety of designs available. The custom options allowed me to create exactly what I wanted. My bedroom has never looked better. Thank you every thing!', stars: 4 },
  { name: 'James Taylor Wilson', text: 'Exceptional service from start to finish!...', stars: 3 },
  { name: 'Jacob Jones', text: 'Custom options allowed me to create exactly what I wanted...', stars: 5 },
  { name: 'Leslie Alexander', text: 'Service from start to finish! The delivery was prompt...', stars: 4 },
];




  ngAfterViewInit() {
    setTimeout(() => {
    this.setupLoopScroll(this.track1.nativeElement, 70, 'left');
    this.setupLoopScroll(this.track2.nativeElement, 70, 'right');
  }, 0);  }

 setupLoopScroll(container: HTMLElement, speed: number, direction: 'left' | 'right' = 'left') {
  const track = container.querySelector('.carousel-track') as HTMLElement;
  const cards = Array.from(track.children) as HTMLElement[];

  // Step 1: Clear previous clones
  const clones = track.querySelectorAll('.clone');
  clones.forEach(clone => clone.remove());

  // Step 2: Duplicate cards until total width ≥ 2x container width
  let totalWidth = track.scrollWidth;
  const containerWidth = container.offsetWidth;

  while (totalWidth < containerWidth * 2) {
    cards.forEach(card => {
      const clone = card.cloneNode(true) as HTMLElement;
      clone.classList.add('clone');
      track.appendChild(clone);
    });
    totalWidth = track.scrollWidth;
  }

  // Step 3: Animate with GSAP
  const distance = track.scrollWidth / 2;

gsap.to(track, {
  x: direction === 'left' ? `-=${distance}` : `+=${distance}`,
  ease: 'none',
  duration: distance / speed,
  repeat: -1,
  modifiers: {
    x: gsap.utils.unitize(x => direction === 'left'
      ? parseFloat(x) % distance
      : (parseFloat(x) % distance) - distance
    ), 
  },
});

}
}