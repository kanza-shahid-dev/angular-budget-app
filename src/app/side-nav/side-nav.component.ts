import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  isSlideOut = true;
  constructor(private router: Router) {}

  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
  }
  onDash() {
    this.router.navigate(['/budget-planner/dashboard']);
  }
  onProfile() {
    this.router.navigate(['/budget-planner/profile']);
  }
  onHistory() {
    this.router.navigate(['/budget-planner/history']);
  }
  onLogout() {
    this.router.navigate(['/budget-planner/login']);
  }
}
