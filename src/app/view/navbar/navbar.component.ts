import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class  NavbarComponent  implements OnInit {
 
  isHomePage = false;
   isFixed = false;

  constructor(private router: Router,private route: ActivatedRoute, private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
 this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          setTimeout(() => {
            this.scrollToSection(fragment);
          }, 100); // Ensures DOM is rendered
        }
      });
  }

  navigateToSection(sectionId: string) {
    if (this.router.url.startsWith('/home')) {
      this.scrollToSection(sectionId);
    } else {
      this.router.navigate(['/home'], { fragment: sectionId });
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

mobileMenuOpen = false;

toggleMobileMenu() {
  this.mobileMenuOpen = !this.mobileMenuOpen;
}

closeMobileMenu() {
  this.mobileMenuOpen = false;
}

}