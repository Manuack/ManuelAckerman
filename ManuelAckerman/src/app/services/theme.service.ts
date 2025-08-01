import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = new BehaviorSubject<Theme>('dark');
  public theme$ = this.currentTheme.asObservable();

  constructor() {
    this.loadTheme();
  }

  getCurrentTheme(): Theme {
    return this.currentTheme.value;
  }

  setTheme(theme: Theme): void {
    this.currentTheme.next(theme);
    this.saveTheme(theme);
    this.applyTheme(theme);
  }

  toggleTheme(): void {
    const newTheme = this.getCurrentTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      this.setTheme(savedTheme);
    }
  }

  private saveTheme(theme: Theme): void {
    localStorage.setItem('theme', theme);
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
  }
}