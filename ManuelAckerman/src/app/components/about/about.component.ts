import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="about-container">
      <h1>Acerca de Manuel</h1>
      <p>Próximamente...</p>
      <a routerLink="/" class="back-button">Volver al inicio</a>
    </div>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}