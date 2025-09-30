import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface AppConfig {
  instagramUrl: string;
  defaultLanguage: string;
  supportedLanguages: string[];
  appName: string;
  author: string;
  version: string;
  apiUrl: string;
  production: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: AppConfig = {
    instagramUrl: environment.instagramUrl,
    defaultLanguage: environment.defaultLanguage,
    supportedLanguages: environment.supportedLanguages,
    appName: environment.appName,
    author: environment.author,
    version: environment.version,
    apiUrl: environment.apiUrl,
    production: environment.production
  };

  constructor() {}

  public getConfig(): AppConfig {
    return { ...this.config };
  }

  public getInstagramUrl(): string {
    return this.config.instagramUrl;
  }

  public getDefaultLanguage(): string {
    return this.config.defaultLanguage;
  }

  public getSupportedLanguages(): string[] {
    return [...this.config.supportedLanguages];
  }

  public getAppName(): string {
    return this.config.appName;
  }

  public getAuthor(): string {
    return this.config.author;
  }

  public getVersion(): string {
    return this.config.version;
  }

  public getApiUrl(): string {
    return this.config.apiUrl;
  }

  public isProduction(): boolean {
    return this.config.production;
  }
}
