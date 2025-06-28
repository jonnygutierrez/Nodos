import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  output,
  ViewChild,
} from '@angular/core';

declare const Swiper: any;

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements AfterViewInit {
  @ViewChild('menu') menu?: ElementRef;
  @ViewChild('lists') listm?: ElementRef;
  isMenuOpen: boolean = false;

  public isScroll: boolean = false;

  // NEW EVENET EMITTER
  @Output() private routeSelect = new EventEmitter<string>();

  // ALL ROUTES
  // TODO: ESPECIFICAR EL ID DE LOS ELEMENTOS A NAVEGAR DEL PADRE
  public allRoutes: { title: string; url: string }[] = [
    {
      title: 'Nosotros',
      url: 'us',
    },
    {
      title: 'Servicios',
      url: 'services',
    },
    {
      title: 'Portafolio',
      url: 'wallet',
    },
    {
      title: 'Contáctanos',
      url: 'contact-us',
    },
  ];

  public linearHeaders: string[] = [
    'UI Design',
    'App Design',
    'Dashboard',
    'Wireframe',
    'User Research',
    'UI Design',
    'App Design',
    'Dashboard',
    'Wireframe',
    'User Research',
    'UI Design',
    'App Design',
    'Dashboard',
    'Wireframe',
    'User Research',
    'UI Design',
    'App Design',
    'Dashboard',
    'Wireframe',
    'User Research',
    'UI Design',
    'App Design',
    'Dashboard',
    'Wireframe',
    'User Research',
    'UI Design',
    'App Design',
    'Dashboard',
    'Wireframe',
    'User Research',
    'UI Design',
    'App Design',
    'Dashboard',
    'Wireframe',
    'User Research',
  ];

  public idiom: string = 'ES';

  ngAfterViewInit(): void {
    this.createSwiper();
  }
  toggleMenu() {
    if (this.isMenuOpen) {
      this.listm?.nativeElement.classList.add('closing');

      setTimeout(() => {
        this.isMenuOpen = false;
        this.listm?.nativeElement.classList.remove('closing');
        document.body.style.overflow = '';
      }, 500);
    } else {
      document.body.style.overflow = 'hidden';
      this.isMenuOpen = true;
    }
  }

  selectIdiom(): void {
    if (this.idiom === 'ES') {
      this.idiom = 'EN';
    } else {
      this.idiom = 'ES';
    }
  }

  // ON NAVGATION ROUTE
  onSelectRoute(route: string): void {
    if (this.isMenuOpen) {
      this.toggleMenu();
      setTimeout(() => {
        this.routeSelect.emit(route);
      }, 600);
    }
    this.routeSelect.emit(route);
  }

  // CARRUSEL
  createSwiper(): void {
    new Swiper('.swiper', {
      loop: true,
      slidesPerView: 10,
      // spaceBetween: 0,
      freeMode: false, // Puedes probar con true también
      grabCursor: true,

      // 👇 Estas son las claves para que funcione bien en pantallas grandes
      loopAdditionalSlides: 5,
      watchSlidesProgress: true,
      centeredSlides: false,
    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScroll = window.scrollY > 50;
  }

  onWhatsapp(): void {
    const link = document.createElement('a');
    link.href =
      'https://wa.me/529933700335?text=%C2%A1Hola!%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios';
    link.target = '_blank';
    link.click();
  }
}
