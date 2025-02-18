import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { UsServicesComponent } from './us-services/us-services.component';
import { BriefcaseComponent } from './briefcase/briefcase.component';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { CardInfoComponent } from './components/card-info/card-info.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SkillsComponent,
    UsServicesComponent,
    BriefcaseComponent,
    NavBarComponent, 
    CardInfoComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items: string[] = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4']; // Datos de ejemplo

  ngAfterViewInit(): void {
    // Inicializa Swiper después de que la vista se haya cargado
    new (window as any).Swiper('.swiper', {
 
      autoplay:{
        delay:5000
      }
    });
  }
}
