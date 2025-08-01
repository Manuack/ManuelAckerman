import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface SiteConfig {
  title: string;
  subtitle: string;
  instagramUrl: string;
  videoUrl: string;
  theme: 'dark' | 'light';
  animations: boolean;
  particlesEnabled: boolean;
}

export interface ParticleConfig {
  count: number;
  size: { min: number; max: number };
  speed: { min: number; max: number };
  opacity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private defaultConfig: SiteConfig = {
    title: 'Manuel Ackerman',
    subtitle: 'Próximamente encontrarás aquí mis historias y galería de imágenes.',
    instagramUrl: 'https://instagram.com/tu_usuario',
    videoUrl: 'assets/videos/background.mp4',
    theme: 'dark',
    animations: true,
    particlesEnabled: true
  };

  private defaultParticleConfig: ParticleConfig = {
    count: 50,
    size: { min: 2, max: 6 },
    speed: { min: 4, max: 8 },
    opacity: 0.1
  };

  private configSubject = new BehaviorSubject<SiteConfig>(this.defaultConfig);
  private particleConfigSubject = new BehaviorSubject<ParticleConfig>(this.defaultParticleConfig);

  public config$: Observable<SiteConfig> = this.configSubject.asObservable();
  public particleConfig$: Observable<ParticleConfig> = this.particleConfigSubject.asObservable();

  constructor() {
    this.loadConfiguration();
  }

  getCurrentConfig(): SiteConfig {
    return this.configSubject.value;
  }

  getCurrentParticleConfig(): ParticleConfig {
    return this.particleConfigSubject.value;
  }

  updateConfig(config: Partial<SiteConfig>): void {
    const currentConfig = this.getCurrentConfig();
    const newConfig = { ...currentConfig, ...config };
    this.configSubject.next(newConfig);
    this.saveConfiguration(newConfig);
  }

  updateParticleConfig(config: Partial<ParticleConfig>): void {
    const currentConfig = this.getCurrentParticleConfig();
    const newConfig = { ...currentConfig, ...config };
    this.particleConfigSubject.next(newConfig);
  }

  private loadConfiguration(): void {
    const savedConfig = localStorage.getItem('site-config');
    if (savedConfig) {
      try {
        const config = JSON.parse(savedConfig);
        this.configSubject.next({ ...this.defaultConfig, ...config });
      } catch (error) {
        console.warn('Error loading configuration:', error);
      }
    }
  }

  private saveConfiguration(config: SiteConfig): void {
    try {
      localStorage.setItem('site-config', JSON.stringify(config));
    } catch (error) {
      console.warn('Error saving configuration:', error);
    }
  }
}