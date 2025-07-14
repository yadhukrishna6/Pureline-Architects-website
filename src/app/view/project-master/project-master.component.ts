import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-project-master',
  standalone: false,
  templateUrl: './project-master.component.html',
  styleUrl: './project-master.component.scss'
})
export class ProjectMasterComponent implements OnInit, AfterViewInit {

  @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;
  projects = [
    { id: 1, category: 'Residential Spaces', title: 'Cozy Bedroom', image: 'assets/pexels-valeriya-827518.jpg' },
    { id: 2, category: 'Commercial Interiors', title: 'Chic Café', image: 'assets/pexels-fotoaibe-1643383.jpg' },
    { id: 3, category: 'Residential Spaces', title: 'Cozy Bedroom', image: 'assets/pexels-valeriya-827518.jpg' },
    { id: 4, category: 'Commercial Interiors', title: 'Chic Café', image: 'assets/pexels-fotoaibe-1643383.jpg' },
    // more...
  ];

  goToDetail(id: number) {
    this.router.navigate(['/projects', id]);
  }
  constructor(private router: Router) { }

  ngOnInit(): void { }
  ngAfterViewInit(): void {
    this.projectCards.forEach((card, index) => {
      gsap.from(card.nativeElement, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card.nativeElement,
          start: 'top 90%',
        }
      });
    });
  }

}
