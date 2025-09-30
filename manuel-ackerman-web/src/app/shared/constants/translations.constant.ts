import { Texts, FooterTexts, SupportedLanguage } from '../interfaces/texts.interface';

export const TRANSLATIONS: Record<SupportedLanguage, Texts> = {
  es: {
    title: '¡Get it!',
    subtitle: 'Estoy cocinando algo épico: skate, fotos y historias que no te querés perder.',
    button: 'Seguíme en Instagram',
    videoUnsupported: 'Tu navegador no soporta vídeo HTML5.'
  },
  en: {
    title: 'Get it!',
    subtitle: 'I\'m cooking up something epic: skate, photos, and stories you won\'t want to miss.',
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

export const FOOTER_TRANSLATIONS: Record<SupportedLanguage, FooterTexts> = {
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
