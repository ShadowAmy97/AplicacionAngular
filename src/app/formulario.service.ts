import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  url='http://localhost/TrabajoAngular/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  alta(formulario:any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(formulario));    
  }
}
