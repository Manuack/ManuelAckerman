import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SupportedLanguage } from '../../shared/interfaces/texts.interface';
import { LoggerService } from '../logging/logger.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<SupportedLanguage>('en');
  public currentLanguage$: Observable<SupportedLanguage> = this.currentLanguageSubject.asObservable();

  constructor(private readonly logger: LoggerService) {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    const userPreferredLang = this.getStoredLanguage();
    if (userPreferredLang) {
      this.currentLanguageSubject.next(userPreferredLang);
    } else {
      const detectedLang = this.detectLanguage();
      this.currentLanguageSubject.next(detectedLang);
    }
  }

  private detectLanguage(): SupportedLanguage {
    try {
      const browserLang = navigator.language.split('-')[0] as SupportedLanguage;

      if (this.isSupportedLanguage(browserLang)) {
        this.logger.debug(`🌍 Browser language detected: ${browserLang}`);
        return browserLang;
      }

      this.logger.debug(`🌍 Browser language '${browserLang}' not supported, using English`);
      return 'en';
    } catch (error) {
      this.logger.warn('🌍 Error detecting browser language, using English fallback:', error);
      return 'en';
    }
  }

  private isSupportedLanguage(lang: string): lang is SupportedLanguage {
    return ['es', 'en', 'pt'].includes(lang);
  }

  public getCurrentLanguage(): SupportedLanguage {
    return this.currentLanguageSubject.value;
  }

  public setLanguage(language: SupportedLanguage): void {
    if (this.isSupportedLanguage(language)) {
      this.currentLanguageSubject.next(language);
      localStorage.setItem('preferred-language', language);
    }
  }

  public getStoredLanguage(): SupportedLanguage | null {
    const stored = localStorage.getItem('preferred-language');
    return stored && this.isSupportedLanguage(stored) ? stored : null;
  }

  public resetToBrowserLanguage(): void {
    localStorage.removeItem('preferred-language');
    const detectedLang = this.detectLanguage();
    this.currentLanguageSubject.next(detectedLang);
    this.logger.debug(`🌍 Reset to browser language: ${detectedLang}`);
  }

  public getBrowserLanguage(): SupportedLanguage {
    return this.detectLanguage();
  }
}
