import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

name: any;

message: any;
disabledEmail:boolean = true
email: string = ''; 
a=/[@]/

  onEmailChange(e: any) {
    console.log(e)
    this.disabledEmail = !this.a.test(e);
  }

  sendEmailConfirm(){
    console.log('entro')

  }

  sendEmail() {
    const params = {
      title: 'prueba de nodo',
      name: this.name,
      email: this.email,
      message: this.message
    };

    emailjs.send('service_kkx0g0n', 'template_8l4n4ql', params, 'Ub2X5DOVO8Ykwby2U')
      .then(() => {
        console.log('se envio el correo ');
      })
      .catch((error) => {
        console.error(error);
        console.log('no se pudo enviar el correo ')
      });
  }


}
