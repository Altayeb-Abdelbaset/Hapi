import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    // Scroll to top on route change
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);  // Scroll to the top of the page
      }
    });
  }

  // Scroll to top when button is clicked
  scrollTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
