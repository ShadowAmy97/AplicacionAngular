import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  peliculas: any;
  nombre: any;
  recaudacion:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6")
      .subscribe(
        resultado => {
          this.peliculas = resultado;
          this.nombre=this.peliculas.title;
          this.recaudacion = 159000000;
        }
      );
  }
  fechaActual = new Date();
}
