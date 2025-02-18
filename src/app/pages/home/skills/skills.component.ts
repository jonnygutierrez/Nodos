import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'], // Corrección aquí
})
export class SkillsComponent {
  skills = [
    { id: 1, name: 'Angular', icon: 'angular', src: '../../../../assets/img/skills/angular_logo.png' },
    { id: 2, name: 'HTML', icon: 'angular' , src: '../../../../assets/img/skills/html_logo.png' },
    { id: 3, name: 'Laravel', icon: 'angular' , src: '../../../../assets/img/skills/laravel.png'},
    { id: 4, name: 'Google Maps', icon: 'angular'  , src: '../../../../assets/img/skills/google_maps.png'},
    { id: 5, name: 'IONIC', icon: 'angular' , src: '../../../../assets/img/skills/ionic.png'},
    { id: 6, name: 'MySQL', icon: 'angular' , src: '../../../../assets/img/skills/mysql.png'},
    { id: 7, name: 'Ubuntu', icon: 'angular', src: '../../../../assets/img/skills/ubuntu_logo.png' },
  ];
  activeIndexes: number[] = []; 

  ngOnInit(): void {
    this.animateCards();
  }

  animateCards(): void {
    this.skills.forEach((_, index) => {
      setTimeout(() => {
        this.activeIndexes.push(index); 
      }, index * 250);
    });
  }

  isActive(index: number): boolean {
    return this.activeIndexes.includes(index); 
  }

}
