import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader
  ]
})
export class AppComponent {

  isMenuCollapsed = true;


  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  toggleMenuCollapse() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

}
