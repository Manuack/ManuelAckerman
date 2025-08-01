import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  
  constructor() { }

  trackEvent(action: string, category: string, label?: string, value?: number): void {
    // Implementar tracking de eventos (Google Analytics, etc.)
    console.log('Analytics Event:', { action, category, label, value });
    
    // Ejemplo con gtag (Google Analytics 4)
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }

  trackPageView(page: string, title?: string): void {
    console.log('Page View:', page, title);
    
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: title,
        page_location: page
      });
    }
  }

  trackInstagramClick(): void {
    this.trackEvent('click', 'social', 'instagram_button');
  }
}