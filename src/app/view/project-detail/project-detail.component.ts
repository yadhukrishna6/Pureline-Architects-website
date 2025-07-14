import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-project-detail',
  standalone: false,
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})

export class ProjectDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('projectBg', { static: false }) projectBg!: ElementRef;

  project: any;

  projects = [
    {
      id: 1,
      category: 'Residential Spaces',
      title: 'Cozy Bedroom',
      image: 'assets/pexels-valeriya-827518.jpg',
      description: 'Elegant and calm.',
      client: 'Mr. John Doe',
      location: 'Chelsea, London',
      period: 'Jan 2022 – Oct 2022',
      gallery: [
        'assets/pexels-valeriya-827518.jpg',
        'assets/pexels-valeriya-827518.jpg',
        'assets/pexels-valeriya-827518.jpg'
      ]
    },
  ];


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.project = this.projects.find(p => p.id === id);
  }
  ngAfterViewInit(): void {
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
  }
}

