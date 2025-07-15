import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigDataService {
  // BASE URL
  private configUrl: string = 'assets/data/';

  constructor(private http: HttpClient) {}

  // OBTENER TODOS LOS PAQUETES

  // OBTENER TODOS LOS PAQUETES
  getAllPack(): Observable<any[] | undefined> {
    return this.http.get<any[]>(`${this.configUrl}configPack.json`).pipe(
      catchError((error) => {
        console.error('Error al cargar los paquetes');
        return of(undefined);
      })
    );
  }
}
