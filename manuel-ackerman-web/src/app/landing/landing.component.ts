import { Component, HostListener, OnDestroy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

import { Subscription } from 'rxjs';
import { SupportedLanguage } from '../shared/interfaces/texts.interface';
import { TRANSLATIONS } from '../shared/constants/translations.constant';
import { LanguageService } from '../core/i18n/language.service';
import { ConfigService } from '../core/settings/config.service';
import { LoggerService } from '../core/logging/logger.service';
import { LandingViewState } from './landing-view-state';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnDestroy {
  parallaxTransform = 'translate(0,0)';
  readonly viewState = signal<LandingViewState>({ status: 'loading' });

  readonly isLoading = computed(() => this.viewState().status === 'loading');
  readonly errorView = computed(() => {
    const s = this.viewState();
    return s.status === 'error' ? s : null;
  });
  readonly readyView = computed(() => {
    const s = this.viewState();
    return s.status === 'ready' ? s : null;
  });

  private languageSubscription: Subscription;

  constructor(
    private languageService: LanguageService,
    private configService: ConfigService,
    private logger: LoggerService
  ) {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(() =>
      this.loadLandingContent()
    );
  }

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }

  retry(): void {
    this.loadLandingContent();
  }

  private loadLandingContent(): void {
    this.viewState.set({ status: 'loading' });
    try {
      const language = this.languageService.getCurrentLanguage();
      const texts = this.resolveTexts(language);
      this.viewState.set({ status: 'ready', texts });
      this.logger.debug('Landing content ready', {
        language,
        browser: this.languageService.getBrowserLanguage(),
        stored: this.languageService.getStoredLanguage()
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : 'No se pudo cargar el contenido.';
      this.viewState.set({ status: 'error', message });
    }
  }

  private resolveTexts(language: SupportedLanguage) {
    return TRANSLATIONS[language] || TRANSLATIONS['en'];
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
