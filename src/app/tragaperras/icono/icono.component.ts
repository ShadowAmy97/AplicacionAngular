import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icono',
  templateUrl: './icono.component.html',
  styleUrls: ['./icono.component.css']
})
export class IconoComponent implements OnInit {
  @Input() valor: number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
