import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `
    <div class="gallery-container">
      <h1>Galería de Imágenes</h1>
      <p>Próximamente...</p>
      <a routerLink="/" class="back-button">Volver al inicio</a>
    </div>
  `,
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}