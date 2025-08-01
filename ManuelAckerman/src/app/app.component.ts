import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-layout>
      <router-outlet></router-outlet>
    </app-layout>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'manuel-ackerman-web';
}