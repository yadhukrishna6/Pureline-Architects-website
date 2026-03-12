import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { PROJECTS, Project } from '../../shared/data/projects.data';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-project-detail',
  standalone: false,
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})

export class ProjectDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('projectBg', { static: false }) projectBg!: ElementRef;

  project: Project | undefined;
  mapUrl: SafeResourceUrl | undefined;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.project = PROJECTS.find(p => p.id === id);
    if (this.project) {
        // Construct standard generic embed URL based loosely on location
        const rawUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(this.project.location)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;
        this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
    }
  }
  ngAfterViewInit(): void {
    // Parallax background effect
    gsap.to('.project-bg', {
      scale: 1,
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.project-content',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Animate gallery images gracefully
    ScrollTrigger.batch('.gallery-grid img', {
      onEnter: elements => {
        gsap.fromTo(elements, 
          { autoAlpha: 0, y: 60 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
        );
      },
      once: true
    });
  }
}

