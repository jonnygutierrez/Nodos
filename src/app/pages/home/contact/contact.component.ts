import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../../core/services.service';

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
email: string = ''; 

  constructor(
    private alert: ServicesService
  ){ }


  sendEmailConfirm() {
    if (!this.name || !this.email || !this.message) {
      this.alert.alertShow('error','Por favor, complete todos los campos')
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.alert.alertShow('error','Por favor, ingrese un correo electrónico válido')
      return;
    }
    this.sendEmail()
  }

  sendEmail() {
    const params = {
      title: 'Correo de solicitud ',
      name: this.name,
      email: this.email,
      message: this.message
    };

    emailjs.send('service_kkx0g0n', 'template_8l4n4ql', params, 'Ub2X5DOVO8Ykwby2U')
      .then(() => {
        console.log('se envio el correo ');
        this.alert.alertShow('success','Correo enviado')
        this.name=''
        this.email = ''
        this.message = ''
      })
      .catch((error) => {
        console.error(error);
         this.alert.alertShow('error','Error al enviar correo ')
      });
  }


}
