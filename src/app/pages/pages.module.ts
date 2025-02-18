import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SkillsComponent } from './home/skills/skills.component';
import { MatIconModule } from '@angular/material/icon'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SkillsComponent,
    MatIconModule
  ]
})
export class PagesModule { }
