import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public navOpen = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => (this.navOpen = false));
  }

  public toggleNav(): void {
    this.navOpen = !this.navOpen;
  }
}
