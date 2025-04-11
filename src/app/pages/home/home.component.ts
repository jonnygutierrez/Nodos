import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { UsServicesComponent } from './us-services/us-services.component';
import { BriefcaseComponent } from './briefcase/briefcase.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import Splide from '@splidejs/splide';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SkillsComponent,
    UsServicesComponent,
    BriefcaseComponent,
    NavBarComponent,
    CardInfoComponent,
    FooterComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  @ViewChild('carrusel') carrusel?: ElementRef;

  skills = [
    {
      id: 1,
      name: 'Angular',
      icon: 'angular',
      src: '../../../assets/img/skills/angular_logo.png',
    },
    {
      id: 2,
      name: 'HTML',
      icon: 'angular',
      src: '../../../assets/img/skills/html_logo.png',
    },
    {
      id: 3,
      name: 'Laravel',
      icon: 'angular',
      src: '../../../assets/img/skills/laravel.png',
    },
    {
      id: 4,
      name: 'Google Maps',
      icon: 'angular',
      src: '../../../assets/img/skills/google_maps.png',
    },
    {
      id: 5,
      name: 'IONIC',
      icon: 'angular',
      src: '../../../assets/img/skills/ionic.png',
    },
    {
      id: 6,
      name: 'MySQL',
      icon: 'angular',
      src: '../../../assets/img/skills/mysql.png',
    },
    {
      id: 7,
      name: 'Ubuntu',
      icon: 'angular',
      src: '../../../assets/img/skills/ubuntu_logo.png',
    },
  ];

  ngAfterViewInit(): void {

    //  new Splide(this.carrusel?.nativeElement, {
  //
     //   perPage:2,
    //    breakpoints:{
     //     640:{
     //       perPage
    //      }
     //   }
     // }).mount();
    


    // Inicializa Swiper después de que la vista se haya cargado
    new (window as any).Swiper('.swiper', {
      slidesPerView: 1.8,
      spaceBetween: 0,

      loop: true,
      autoplay: {
        delay: 5000,
      },

      breakpoints: {
        560: {
          slidesPerView: 2.7,
        },
        768: {
          slidesPerView: 4,
        },
        1440: {
          slidesPerView: 7,
        },
      },
    });
  }
}
