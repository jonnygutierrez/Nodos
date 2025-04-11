import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-creative-proccess',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './creative-proccess.component.html',
  styleUrl: './creative-proccess.component.scss'
})
export class CreativeProccessComponent {
  procesos = [
    {
      title: 'Conexión',
      description: 'Escuchamos tu historia, entendemos tus objetivos y exploramos el camino que llevará tu marca al siguiente nivel.',
      class: ''
    },
    {
      title: 'Concepto',
      description: 'Damos forma a tus ideas con propuestas visuales y prototipos digitales que equilibran innovación y funcionalidad.',
      class: ''
    },
    {
      title: 'Creación',
      description: 'Construimos soluciones digitales con precisión y creatividad, listas para cautivar, comunicar y crecer junto a tu marca.',
      class: 'cre'
    }
  ];
}
