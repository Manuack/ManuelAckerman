import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { LanguageSwitcherComponent } from './shared/components/language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandingComponent, LanguageSwitcherComponent],
  template: `
    <app-language-switcher></app-language-switcher>
    <app-landing></app-landing>
  `
})
export class AppComponent {}