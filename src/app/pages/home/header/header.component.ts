import { Component, ElementRef, Renderer2 } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {





  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    const elements = this.el.nativeElement.querySelectorAll('.fade-in');
    elements.forEach((element: HTMLElement, index: number) => {
      setTimeout(() => {
        this.renderer.addClass(element, 'fade-in');
      }, index * 500); // Aparece cada elemento con un retraso de 500ms
    });
  }

}
