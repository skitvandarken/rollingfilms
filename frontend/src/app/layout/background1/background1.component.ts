import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background1',
  standalone: true,
  imports: [],
  templateUrl: './background1.component.html',
  styleUrl: './background1.component.css'
})
export class backgroundVideoComponent implements OnInit {

  ngOnInit(): void {
    this.setPlaysInlineForVideo();
  }

  setPlaysInlineForVideo(): void {
    const video = document.getElementById('backgroundVideo') as HTMLVideoElement;

    if (video) {
      // Force inline play on supported mobile devices
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');

      // Handle iOS fullscreen video issue
      video.addEventListener('loadedmetadata', () => {
        if (video.paused) {
          video.play().catch((error) => console.error('Autoplay failed:', error));
        }
      });
    }
  }
}