import { Component } from '@angular/core';

@Component({
  selector: 'apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'app1';
  image = '../assets/images/notFound.png';
  class = 'theme-1';
}
