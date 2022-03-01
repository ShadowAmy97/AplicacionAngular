import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'boot-barrademenu',
  templateUrl: './barrademenu.component.html',
  styleUrls: ['./barrademenu.component.css']
})
export class BarrademenuComponent implements OnInit {

  @Input() opciones!: string[];
  @Input() colorfondo!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
