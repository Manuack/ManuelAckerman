import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SupportedLanguage } from '../../shared/interfaces/texts.interface';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<SupportedLanguage>('en');
  public currentLanguage$: Observable<SupportedLanguage> = this.currentLanguageSubject.asObservable();

  constructor() {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    // Priority order: 1) User preference, 2) Browser language, 3) English fallback
    const userPreferredLang = this.getStoredLanguage();
    if (userPreferredLang) {
      // User has explicitly chosen a language before
      this.currentLanguageSubject.next(userPreferredLang);
    } else {
      // Use browser language or fallback to English
      const detectedLang = this.detectLanguage();
      this.currentLanguageSubject.next(detectedLang);
    }
  }

  private detectLanguage(): SupportedLanguage {
    try {
      // Get browser language (e.g., 'en-US' -> 'en', 'es-ES' -> 'es')
      const browserLang = navigator.language.split('-')[0] as SupportedLanguage;
      
      // Check if browser language is supported
      if (this.isSupportedLanguage(browserLang)) {
        console.log(`🌍 Browser language detected: ${browserLang}`);
        return browserLang;
      }
      
      // Fallback to English if browser language not supported
      console.log(`🌍 Browser language '${browserLang}' not supported, using English`);
      return 'en';
    } catch (error) {
      console.warn('🌍 Error detecting browser language, using English fallback:', error);
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
      // Store in localStorage for persistence
      localStorage.setItem('preferred-language', language);
    }
  }

  public getStoredLanguage(): SupportedLanguage | null {
    const stored = localStorage.getItem('preferred-language');
    return stored && this.isSupportedLanguage(stored) ? stored : null;
  }

  public resetToBrowserLanguage(): void {
    // Remove stored preference and use browser language
    localStorage.removeItem('preferred-language');
    const detectedLang = this.detectLanguage();
    this.currentLanguageSubject.next(detectedLang);
    console.log(`🌍 Reset to browser language: ${detectedLang}`);
  }

  public getBrowserLanguage(): SupportedLanguage {
    return this.detectLanguage();
  }
}
