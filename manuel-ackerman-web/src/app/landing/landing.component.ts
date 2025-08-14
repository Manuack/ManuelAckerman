import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

interface Texts {
  title: string;
  subtitle: string;
  button: string;
  videoUnsupported?: string;
}

const TRANSLATIONS: Record<string, Texts> = {
  es: {
    title: '¡Get it!',
    subtitle: 'Estoy cocinando algo épico: skate, fotos y historias que no te querés perder.',
    button: 'Seguíme en Instagram',
    videoUnsupported: 'Tu navegador no soporta vídeo HTML5.'
  },
  en: {
    title: 'Get it!',
    subtitle: 'I’m cooking up something epic: skate, photos, and stories you won’t want to miss.',
    button: 'Follow me on Instagram',
    videoUnsupported: 'Your browser does not support HTML5 video.'
  },
  pt: {
    title: 'Get it!',
    subtitle: 'Estou preparando algo épico: skate, fotos e histórias que você não vai querer perder.',
    button: 'Siga-me no Instagram',
    videoUnsupported: 'Seu navegador não suporta vídeo em HTML5.'
  }
};

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  parallaxTransform = 'translate(0,0)';
  texts: Texts;

  constructor() {
    const lang = navigator.language.split('-')[0];
    this.texts = TRANSLATIONS[lang] || TRANSLATIONS['en'];
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const x = (e.clientX / innerWidth - 0.5) * 20;
    const y = (e.clientY / innerHeight - 0.5) * 20;
    this.parallaxTransform = `translate(${x}px, ${y}px)`;
  }

  onInstagramClick() {
    window.open('https://www.instagram.com/manu_el_ackerman', '_blank');
  }
}