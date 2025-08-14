import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterTexts {
  footer: string;
}

const FOOTER_TRANSLATIONS: Record<string, FooterTexts> = {
  es: {
    footer: '© {year} Manuel Ackerman. Todos los derechos reservados.'
  },
  en: {
    footer: '© {year} Manuel Ackerman. All rights reserved.'
  },
  pt: {
    footer: '© {year} Manuel Ackerman. Todos os direitos reservados.'
  }
};

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerText: string;
  currentYear = new Date().getFullYear();

  constructor() {
    const lang = navigator.language.split('-')[0];
    const texts = FOOTER_TRANSLATIONS[lang] || FOOTER_TRANSLATIONS['en'];
    this.footerText = texts.footer.replace('{year}', this.currentYear.toString());
  }
}
