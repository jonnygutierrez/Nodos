import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { UsServicesComponent } from './us-services/us-services.component';
import { BriefcaseComponent } from './briefcase/briefcase.component';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { CardInfoComponent } from './components/card-info/card-info.component';
import { FooterComponent } from './footer/footer.component';

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
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
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
    // Inicializa Swiper después de que la vista se haya cargado
    new (window as any).Swiper('.swiper', {
      slidesPerView: 2,
      spaceBetween: 0,

      loop: true,
      autoplay: {
        delay: 5000,
      },

      breakpoints: {
        640: {
          slidesPerView: 3,
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
