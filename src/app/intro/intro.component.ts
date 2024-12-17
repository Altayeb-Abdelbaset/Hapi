import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    // Scroll to top on route change
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        window.scrollTo(600, 0);
        // Scroll to the top of the page
      }
    });
  }

  // Scroll to top when button is clicked
  scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  scrollDown() {
    window.scrollTo({top: 600, behavior: 'smooth'});
  }
}


