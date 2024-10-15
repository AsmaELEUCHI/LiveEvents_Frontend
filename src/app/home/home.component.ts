import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) { // Vérifie si l'environnement est le navigateur
      window.addEventListener('scroll', () => {
        this.animatePlanning();
        this.animateMap();
      });
    }
  }

  animatePlanning(): void{
    const photo = document.querySelector('.photo') as HTMLElement
    const description= document.querySelector('.description') as HTMLElement
    const windowHeight = window.innerHeight
    const photoTop= photo.getBoundingClientRect().top;
    const descriptionTop=description.getBoundingClientRect().top;
    if(photoTop<windowHeight - 100){
      photo.classList.add('show');
    }
    if(descriptionTop<windowHeight - 100){
      description.classList.add('show')
    }
  }

  animateMap(): void{
    const photo = document.querySelector('.photo-new') as HTMLElement;
    const description = document.querySelector('.description-new') as HTMLElement;
    const windowHeight = window.innerHeight;
    const photoTop = photo.getBoundingClientRect().top;
    const descriptionTop = description.getBoundingClientRect().top;
    if (photoTop < windowHeight - 100) {
      photo.classList.add('show-new');
    }

    if (descriptionTop < windowHeight - 100) {
      description.classList.add('show-new');
    }

  }

}
