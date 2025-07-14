import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  alertShow(icon:any, title:any) {
  Swal.fire({
    position: 'top-end',     
    icon: icon,       
    title: title,
    showConfirmButton: false,     
    timer: 3000,                 
    toast: true,            
    background: '#f8f9fa',      
  });
}
}
