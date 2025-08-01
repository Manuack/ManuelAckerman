import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ConfigurationService, ParticleConfig } from '../../services/configuration.service';
import { Subscription } from 'rxjs';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  element: HTMLElement;
}

@Component({
  selector: 'app-particles',
  template: `
    <div #particlesContainer class="particles-container" *ngIf="particlesEnabled">
    </div>
  `,
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent implements OnInit, OnDestroy {
  @ViewChild('particlesContainer') particlesContainer!: ElementRef;
  
  private particles: Particle[] = [];
  private animationId!: number;
  private subscription: Subscription = new Subscription();
  private particleConfig!: ParticleConfig;
  
  particlesEnabled = true;

  constructor(private configService: ConfigurationService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.configService.particleConfig$.subscribe(config => {
        this.particleConfig = config;
        this.initializeParticles();
      })
    );

    this.subscription.add(
      this.configService.config$.subscribe(config => {
        this.particlesEnabled = config.particlesEnabled;
        if (!this.particlesEnabled) {
          this.destroyParticles();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.destroyParticles();
  }

  private initializeParticles(): void {
    if (!this.particlesContainer || !this.particlesEnabled) return;

    this.destroyParticles();
    this.createParticles();
    this.animate();
  }

  private createParticles(): void {
    const container = this.particlesContainer.nativeElement;
    
    for (let i = 0; i < this.particleConfig.count; i++) {
      const particle = this.createParticle();
      this.particles.push(particle);
      container.appendChild(particle.element);
    }
  }

  private createParticle(): Particle {
    const element = document.createElement('div');
    element.className = 'particle';
    
    const size = this.randomBetween(this.particleConfig.size.min, this.particleConfig.size.max);
    const speed = this.randomBetween(this.particleConfig.speed.min, this.particleConfig.speed.max);
    
    element.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(255, 255, 255, ${this.particleConfig.opacity});
      border-radius: 50%;
      pointer-events: none;
    `;

    return {
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + size,
      size,
      speed,
      element
    };
  }

  private animate(): void {
    this.particles.forEach(particle => {
      particle.y -= particle.speed;
      
      if (particle.y < -particle.size) {
        particle.y = window.innerHeight + particle.size;
        particle.x = Math.random() * window.innerWidth;
      }
      
      particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  private destroyParticles(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    this.particles.forEach(particle => {
      if (particle.element.parentNode) {
        particle.element.parentNode.removeChild(particle.element);
      }
    });
    
    this.particles = [];
  }

  private randomBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}