import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent{
  parallaxTransform = 'translate(0,0)';

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const x = (e.clientX / innerWidth - 0.5) * 20;
    const y = (e.clientY / innerHeight - 0.5) * 20;
    this.parallaxTransform = `translate(${x}px, ${y}px)`;
  }

  onInstagramClick() {
    window.open('https://www.instagram.com/manu_el_ackerman', '_blank');
  }
}