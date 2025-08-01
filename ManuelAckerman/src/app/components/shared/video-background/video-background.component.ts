import { Component, Input, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-video-background',
  template: `
    <div class="video-container">
      <video 
        #videoElement
        class="video-background" 
        [src]="videoUrl"
        autoplay 
        muted 
        loop 
        playsinline
        (error)="onVideoError()"
        (loadstart)="onVideoLoadStart()">
      </video>
      <div class="video-overlay"></div>
      <div *ngIf="showFallback" class="fallback-background"></div>
    </div>
  `,
  styleUrls: ['./video-background.component.scss']
})
export class VideoBackgroundComponent implements OnInit, OnDestroy {
  @Input() videoUrl: string = 'assets/videos/background.mp4';
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  
  showFallback = false;
  private fallbackTimeout: any;

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.fallbackTimeout) {
      clearTimeout(this.fallbackTimeout);
    }
  }

  onVideoError(): void {
    this.showFallback = true;
  }

  onVideoLoadStart(): void {
    this.fallbackTimeout = setTimeout(() => {
      if (this.videoElement.nativeElement.readyState === 0) {
        this.showFallback = true;
      }
    }, 5000);
  }
}