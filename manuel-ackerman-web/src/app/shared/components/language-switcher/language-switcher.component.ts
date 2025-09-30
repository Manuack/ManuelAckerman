import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportedLanguage } from '../../interfaces/texts.interface';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="language-switcher">
      <button 
        *ngFor="let lang of supportedLanguages" 
        [class.active]="lang === currentLanguage"
        [class.browser-lang]="isBrowserLanguage(lang)"
        (click)="switchLanguage(lang)"
        class="lang-btn"
        [attr.aria-label]="'Switch to ' + getLanguageName(lang)"
        [title]="getLanguageName(lang) + (isBrowserLanguage(lang) ? ' (Browser default)' : '')"
      >
        <span class="flag">{{ getFlag(lang) }}</span>
        <span *ngIf="isBrowserLanguage(lang)" class="browser-indicator" title="Browser default">🌐</span>
      </button>
    </div>
  `,
  styles: [`
    :host {
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 1000;
    }
    
    .language-switcher {
      display: flex;
      gap: 0.25rem;
      align-items: center;
    }
    
    .lang-btn {
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      border: 2px solid rgba(255, 255, 255, 0.3);
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
    }
    
    .lang-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.6);
      transform: scale(1.1);
    }
    
    .lang-btn.active {
      background: rgba(255, 255, 255, 0.3);
      border-color: rgba(255, 255, 255, 0.9);
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
    }
    
    .lang-btn.browser-lang {
      border-color: rgba(255, 255, 255, 0.7);
    }
    
    .flag {
      font-size: 1.25rem;
      line-height: 1;
    }
    
    .browser-indicator {
      position: absolute;
      top: -0.25rem;
      right: -0.25rem;
      font-size: 0.75rem;
      background: rgba(0, 255, 0, 0.8);
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.5rem;
    }
    
    @media (max-width: 768px) {
      :host {
        top: 0.5rem;
        right: 0.5rem;
      }
      
      .lang-btn {
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
      }
      
      .flag {
        font-size: 1rem;
      }
    }
  `]
})
export class LanguageSwitcherComponent implements OnInit {
  supportedLanguages: SupportedLanguage[] = ['es', 'en', 'pt'];
  currentLanguage: SupportedLanguage = 'en';

  constructor(public languageService: LanguageService) {}

  ngOnInit(): void {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.languageService.currentLanguage$.subscribe(
      (language) => this.currentLanguage = language
    );
  }

  switchLanguage(language: SupportedLanguage): void {
    this.languageService.setLanguage(language);
  }

  getLanguageCode(lang: SupportedLanguage): string {
    const codes = { es: 'ES', en: 'EN', pt: 'PT' };
    return codes[lang];
  }

  getLanguageName(lang: SupportedLanguage): string {
    const names = { es: 'Spanish', en: 'English', pt: 'Portuguese' };
    return names[lang];
  }

  getFlag(lang: SupportedLanguage): string {
    const flags = { es: '🇪🇸', en: '🇺🇸', pt: '🇵🇹' };
    return flags[lang];
  }

  isBrowserLanguage(lang: SupportedLanguage): boolean {
    return lang === this.languageService.getBrowserLanguage();
  }

  resetToBrowserLanguage(): void {
    this.languageService.resetToBrowserLanguage();
  }
}
