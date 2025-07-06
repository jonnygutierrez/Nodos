import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-card-pack',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  templateUrl: './card-pack.component.html',
  styleUrl: './card-pack.component.scss',
})
export class CardPackComponent {
  @Input() public pack: string = '';
  @Input() public data: any;

  onWhatsapp(): void {
    const link = document.createElement('a');
    link.href = `
      https://wa.me/529933700335?text=%C2%A1Hola!%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20su%20paquete%20${this.data.type}%20de%20${this.pack}`;
    link.target = '_blank';
    link.click();
  }
}
