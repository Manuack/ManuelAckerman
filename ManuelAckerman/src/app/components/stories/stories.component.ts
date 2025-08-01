import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  template: `
    <div class="stories-container">
      <h1>Mis Historias</h1>
      <p>Próximamente...</p>
      <a routerLink="/" class="back-button">Volver al inicio</a>
    </div>
  `,
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}