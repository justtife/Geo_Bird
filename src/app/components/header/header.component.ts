import { Component, HostListener } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isHovered = false;
  isTrue = false;
  showDropdown() {
    this.isTrue = !this.isTrue;
  }
  revealScrollToTop = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.revealScrollToTop = windowScroll > 200;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  }

}
