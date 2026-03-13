import { Component, HostListener, OnDestroy, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  isOpen = false;
  private readonly bodyClass = 'menu-open';
  private readonly routeSub;

  constructor(private router: Router, private renderer: Renderer2) {
    this.routeSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.closeMenu());
  }

  toggleMenu() {
    this.isOpen ? this.closeMenu() : this.openMenu();
  }

  onLogoClick() {
    this.closeMenu();
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768 && this.isOpen) {
      this.closeMenu();
    }
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    this.closeMenu();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.closeMenu();
  }

  private openMenu() {
    this.isOpen = true;
    this.renderer.addClass(document.body, this.bodyClass);
  }

  private closeMenu() {
    this.isOpen = false;
    this.renderer.removeClass(document.body, this.bodyClass);
  }
}
