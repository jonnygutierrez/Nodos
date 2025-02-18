import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {


  language: string = 'ES'



  changeLangugage(){
    if(this.language =='ES'){
      this.language ='ENG'
    }else{
      this.language ='ES'
    }
  }

}
