import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { UsServicesComponent } from './us-services/us-services.component';
import { BriefcaseComponent } from './briefcase/briefcase.component';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SkillsComponent,
    UsServicesComponent,
    BriefcaseComponent,
    NavBarComponent, NavBarComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
