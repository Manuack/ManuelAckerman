import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

import { Subscription } from 'rxjs';
import { Texts, SupportedLanguage } from '../shared/interfaces/texts.interface';
import { TRANSLATIONS } from '../shared/constants/translations.constant';
import { LanguageService } from '../core/services/language.service';
import { ConfigService } from '../core/services/config.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {
  parallaxTransform = 'translate(0,0)';
  texts: Texts;
  private languageSubscription: Subscription;

  constructor(
    private languageService: LanguageService,
    private configService: ConfigService
  ) {
    this.texts = TRANSLATIONS['en']; // Default fallback
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      (language) => this.updateTexts(language)
    );
  }

  ngOnInit(): void {
    // Initial text update
    this.updateTexts(this.languageService.getCurrentLanguage());
    
    // Debug: Log current language and browser language
    console.log('🌍 Landing Component - Current Language:', this.languageService.getCurrentLanguage());
    console.log('🌍 Landing Component - Browser Language:', this.languageService.getBrowserLanguage());
    console.log('🌍 Landing Component - User Preferred Language:', this.languageService.getStoredLanguage());
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  private updateTexts(language: SupportedLanguage): void {
    this.texts = TRANSLATIONS[language] || TRANSLATIONS['en'];
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const x = (e.clientX / innerWidth - 0.5) * 20;
    const y = (e.clientY / innerHeight - 0.5) * 20;
    this.parallaxTransform = `translate(${x}px, ${y}px)`;
  }

  onInstagramClick() {
    window.open(this.configService.getInstagramUrl(), '_blank');
  }
}