import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  peliculas: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://ghibliapi.herokuapp.com/films")
      .subscribe(
        resultado => {
          this.peliculas = resultado;
        }
      );
  }
}
