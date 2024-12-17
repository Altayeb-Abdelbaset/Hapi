import { Component, Directive } from '@angular/core';
import { IntroComponent } from "../intro/intro.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dahabiaya',
  standalone: true,
  imports: [IntroComponent,CommonModule],
  templateUrl: './dahabiaya.component.html',
  styleUrl: './dahabiaya.component.css'
})

export class DahabiayaComponent {
  videoLoaded = false;

  loadAndPlayVideo(video: HTMLVideoElement) {
    this.videoLoaded = true;
    video.play();
  }
 
  ngAfterViewInit(): void {
    const modal = document.getElementById('imageModal') as HTMLElement;
    const modalImg = document.getElementById('modalImage') as HTMLImageElement;
    const captionText = document.getElementById('caption') as HTMLElement;
    const images = document.querySelectorAll('.images img');
   

    if (modal && modalImg && captionText) {
      images.forEach((image) => {
        // Cast the image to HTMLImageElement
        const imgElement = image as HTMLImageElement;

        // Get the parent element which is the layer
        const layer = imgElement.parentElement?.querySelector(
          '.layer'
        ) as HTMLElement;
        const titleElement = layer.querySelector('h4') as HTMLElement;
        const descriptionElement = layer.querySelector('p') as HTMLElement;
        if (layer) {
          layer.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = imgElement.src; // Use the casted imgElement
            const title = titleElement ? titleElement.innerText : '';
            const description = descriptionElement
              ? descriptionElement.innerText
              : '';
            captionText.innerHTML = `<p>${description}</p> <h4>${title}</h4>`;
          });
        }
      });

      const closeBtn = document.querySelector('.close') as HTMLElement;
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          modal.style.display = 'none'; // Close the modal when the close button is clicked
        });
      }
    }
  }
 
}
