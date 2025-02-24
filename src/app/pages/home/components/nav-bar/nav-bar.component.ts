import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

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

  ngAfterViewInit(): void {
    console.log(this.menu);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
