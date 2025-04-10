import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  
})
export class NavBarComponent   {
  @ViewChild('menu') menu?: ElementRef;
  @ViewChild('lists') listm?: ElementRef;
  isMenuOpen: boolean = false;
  

  public idiom: string = 'ES';


  toggleMenu() {
    
    if (this.isMenuOpen) {
      this.listm?.nativeElement.classList.add('closing');
      
      setTimeout(() => {
        this.isMenuOpen = false;
        this.listm?.nativeElement.classList.remove('closing');
        document.body.style.overflow = ''
      }, 500);
    } else {
      document.body.style.overflow = 'hidden'
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
}
