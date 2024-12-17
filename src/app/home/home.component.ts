import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import $ from 'jquery';
import { IntroComponent } from '../intro/intro.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent  {

  @ViewChild('btnContainer') btnContainer!: ElementRef;

  constructor() {
    this.audio.volume = this.volume;
    
  }
  ngAfterViewInit(): void {
    const modal = document.getElementById('imageModal') as HTMLElement;
    const modalImg = document.getElementById('modalImage') as HTMLImageElement;
    const captionText = document.getElementById('caption') as HTMLElement;
    const images = document.querySelectorAll('.images img');
    $(document).ready(function () {
      $('#nav li ul').hide(); // Hide all answers initially
      $('#nav li').first().addClass('active').find('ul').show(); // Show the first answer initially

      $('#nav li a').click(function () {
        const isActive = $(this).hasClass('active'); // Check if this is already active

        // Hide all answers and remove 'active' class from all questions
        $('#nav li ul').slideUp();
        $('#nav li a').removeClass('active');

        if (!isActive) {
          // If not already active, open the clicked question's answer
          $(this).addClass('active');
          $(this).next('ul').slideDown();
        }
      });
    });

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
private audio = new Audio(
  '../../assets/nightfall-future-bass-music-228100.mp3'
);
isPlaying = false;
volume = 0.2; // Default volume level (0.0 to 1.0)

toggleMusic() {
  if (this.isPlaying) {
    this.audio.pause();
  } else {
    this.audio.play();
  }
  this.isPlaying = !this.isPlaying;
}

}
