import { Component, OnInit, HostListener } from '@angular/core';
import { ConfigurationService, SiteConfig } from '../../services/configuration.service';
import { AnimationService } from '../../services/animation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  template: `
    <div class="landing-container">
      <app-video-background [videoUrl]="(config$ | async)?.videoUrl || ''"></app-video-background>
      
      <app-particles *ngIf="(config$ | async)?.particlesEnabled"></app-particles>
      
      <div class="content" [@fadeInUp] [style.transform]="parallaxTransform">
        <h1 class="title">{{ (config$ | async)?.title }}</h1>
        <p class="subtitle">{{ (config$ | async)?.subtitle }}</p>
        
        <app-instagram-button
          [instagramUrl]="(config$ | async)?.instagramUrl || ''"
          (buttonClick)="onInstagramClick()">
        </app-instagram-button>
      </div>
    </div>
  `,
  styleUrls: ['./landing.component.scss'],
  animations: []
})
export class LandingComponent implements OnInit {
  config$: Observable<SiteConfig>;
  parallaxTransform = 'translate(0px, 0px)';

  constructor(
    private configService: ConfigurationService,
    public animationService: AnimationService
  ) {
    this.config$ = this.configService.config$;
  }

  ngOnInit(): void {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const mouseX = event.clientX / window.innerWidth;
    const mouseY = event.clientY / window.innerHeight;
    
    const offsetX = (mouseX - 0.5) * 20;
    const offsetY = (mouseY - 0.5) * 20;
    
    this.parallaxTransform = `translate(${offsetX}px, ${offsetY}px)`;
  }

  onInstagramClick(): void {
    // Analytics o tracking aquí si es necesario
    console.log('Instagram button clicked');
  }
}