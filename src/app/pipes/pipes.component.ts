import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  peliculas: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://ghibliapi.herokuapp.com/films/578ae244-7750-4d9f-867b-f3cd3d6fecf4")
      .subscribe(
        resultado => {
          this.peliculas = resultado;
        }
      );
  }
}
