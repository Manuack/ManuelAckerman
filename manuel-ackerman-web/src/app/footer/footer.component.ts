import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { FooterTexts, SupportedLanguage } from '../shared/interfaces/texts.interface';
import { FOOTER_TRANSLATIONS } from '../shared/constants/translations.constant';
import { LanguageService } from '../core/services/language.service';
import { ConfigService } from '../core/services/config.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  footerText: string = '';
  currentYear = new Date().getFullYear();
  private languageSubscription: Subscription;

  constructor(
    private languageService: LanguageService,
    private configService: ConfigService
  ) {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      (language) => this.updateFooterText(language)
    );
  }

  ngOnInit(): void {
    // Initial text update
    this.updateFooterText(this.languageService.getCurrentLanguage());
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  private updateFooterText(language: SupportedLanguage): void {
    const texts = FOOTER_TRANSLATIONS[language] || FOOTER_TRANSLATIONS['en'];
    this.footerText = texts.footer.replace('{year}', this.currentYear.toString());
  }
}
