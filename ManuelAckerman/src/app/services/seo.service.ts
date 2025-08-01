import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  updateTitle(title: string): void {
    this.title.setTitle(title);
  }

  updateMetaTags(tags: { [key: string]: string }): void {
    Object.keys(tags).forEach(key => {
      this.meta.updateTag({ name: key, content: tags[key] });
    });
  }

  updateOpenGraph(og: { [key: string]: string }): void {
    Object.keys(og).forEach(key => {
      this.meta.updateTag({ property: `og:${key}`, content: og[key] });
    });
  }

  setLandingPageMeta(): void {
    this.updateTitle('Manuel Ackerman - Próximamente');
    
    this.updateMetaTags({
      'description': 'Próximamente encontrarás aquí mis historias y galería de imágenes.',
      'keywords': 'Manuel Ackerman, historias, galería, imágenes, fotografía',
      'author': 'Manuel Ackerman',
      'viewport': 'width=device-width, initial-scale=1'
    });

    this.updateOpenGraph({
      'title': 'Manuel Ackerman - Próximamente',
      'description': 'Próximamente encontrarás aquí mis historias y galería de imágenes.',
      'type': 'website',
      'image': 'assets/images/og-image.jpg'
    });
  }
}