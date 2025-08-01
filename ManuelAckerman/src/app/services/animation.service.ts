import { Injectable } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  
  // Animación de entrada principal
  fadeInUp = trigger('fadeInUp', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(50px)' }),
      animate('1.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]);

  // Animación de hover para botones
  buttonHover = trigger('buttonHover', [
    transition(':enter', [
      style({ transform: 'scale(1)' }),
      animate('0.3s ease', style({ transform: 'scale(1.05)' }))
    ]),
    transition(':leave', [
      animate('0.3s ease', style({ transform: 'scale(1)' }))
    ])
  ]);

  // Animación escalonada para elementos de lista
  staggerIn = trigger('staggerIn', [
    transition('* => *', [
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        stagger(100, [
          animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ], { optional: true })
    ])
  ]);

  // Animación de flotación
  float = trigger('float', [
    transition(':enter', [
      animate('3s ease-in-out infinite', style({
        transform: 'translateY(-10px)'
      }))
    ])
  ]);

  constructor() { }
}