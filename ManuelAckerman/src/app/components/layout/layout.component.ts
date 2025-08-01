import { Component, OnInit } from '@angular/core';
import { ConfigurationService, SiteConfig } from '../../services/configuration.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  template: `
    <div class="layout-container" [class.theme-dark]="(config$ | async)?.theme === 'dark'">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  config$: Observable<SiteConfig>;

  constructor(private configService: ConfigurationService) {
    this.config$ = this.configService.config$;
  }

  ngOnInit(): void {}
}