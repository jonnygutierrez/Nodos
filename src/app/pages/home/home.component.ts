import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { UsServicesComponent } from './us-services/us-services.component';
import { BriefcaseComponent } from './briefcase/briefcase.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import Splide from '@splidejs/splide';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CreativeProccessComponent } from './creative-proccess/creative-proccess.component';
import { DesignTxtComponent } from './design-txt/design-txt.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CardPackComponent } from './components/card-pack/card-pack.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SkillsComponent,
    UsServicesComponent,
    BriefcaseComponent,
    NavBarComponent,
    CardInfoComponent,
    FooterComponent,
    ContactComponent,
    CreativeProccessComponent,
    DesignTxtComponent,
    MatButtonToggleModule,
    CardPackComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public selectTo: any;
  // TYPES PAQUETES
  public allTypesPack: any = [
    {
      title: 'Identidad Visual',
      value: 0,
      pack: [
        {
          color: 'basico',
          type: 'Básico',
          price: 1200,
          description: 'Ideal para emprendedores que inician su camino.',
          details: [
            'Diseño de identidad visual',
            'Archivos de imagen (JPG, PNG, SVG)',
            'Archivos editables .Ai',
            'Ronda de cambios limitadas',
            'Manual de marca (Básico)',
          ],
        },
        {
          color: 'estandar',
          type: 'Estándar',
          price: 2800,
          description: 'Perfecto para negocios que buscan crecer.',
          details: [
            'Diseño de identidad visual',
            'Archivos de imagen (JPG, PNG, SVG)',
            'Archivos editables .Ai',
            'Ronda de cambios limitadas',
            'Manual de marca (Estándar)',
            'Papelería corporativa limitada',
          ],
        },
        {
          color: 'premium',
          type: 'Premium',
          price: 4500,
          description: 'Para marcas que quieren destacar y expandirse.',
          details: [
            'Diseño de identidad visual',
            'Archivos de imagen (JPG, PNG, SVG)',
            'Archivos editables .Ai',
            'Ronda de cambios ilimitadas',
            'Manual de marca (Premiun)',
            'Papelería corporativa personalizada',
          ],
        },
      ],
    },
    {
      title: 'Identidad Visual 2',
      value: 1,
      pack: [
        {
          color: 'basico',
          type: 'Básico',
          price: 1200,
          description: 'Ideal para emprendedores que inician su camino.',
          details: [
            'Diseño de identidad visual',
            'Archivos de imagen (JPG, PNG, SVG)',
            'Archivos editables .Ai',
            'Ronda de cambios limitadas',
            'Manual de marca (Básico)',
          ],
        },
        {
          color: 'estandar',
          type: 'Estándar 2',
          price: 2800,
          description: 'Perfecto para negocios que buscan crecer.',
          details: [
            'Diseño de identidad visual',
            'Archivos de imagen (JPG, PNG, SVG)',
            'Archivos editables .Ai',
            'Ronda de cambios limitadas',
            'Manual de marca (Estándar)',
            'Papelería corporativa limitada',
          ],
        },
        {
          color: 'premium',
          type: 'Premium 2',
          price: 4500,
          description: 'Para marcas que quieren destacar y expandirse.',
          details: [
            'Diseño de identidad visual',
            'Archivos de imagen (JPG, PNG, SVG)',
            'Archivos editables .Ai',
            'Ronda de cambios ilimitadas',
            'Manual de marca (Premiun)',
            'Papelería corporativa personalizada',
          ],
        },
      ],
    },
  ];

  public filterPack: any;
  // ELEMENTS FOR TOGGLE
  public elementsToggle: { title: string; value: number }[] = [
    {
      title: 'Identidad Visual',
      value: 0,
    },
    {
      title: 'Páginas Web',
      value: 1,
    },
  ];

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
  ngOnInit(): void {
    this.onToggleSelect(0);
  }
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
      spaceBetween: 10,

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
          spaceBetween: 5,
          slidesPerView: 7,
        },
      },
    });
  }

  // Navigate Reference
  onNavigate(value: string): void {
    // TODO: CHECK ALTURA SEA LA CORRECTA
    const element = document.querySelector(`#${value}`);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 140,
        behavior: 'smooth',
      });
    }
  }

  onWhatsapp(): void {
    const link = document.createElement('a');
    link.href =
      'https://wa.me/529933700335?text=%C2%A1Hola!%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios';
    link.target = '_blank';
    link.click();
  }

  // METODO DE TOGGLE
  onToggleSelect(value: any): void {
    this.filterPack = this.allTypesPack.find(
      (item: any) => item.value === value
    );
    console.log(this.filterPack);
  }
}
