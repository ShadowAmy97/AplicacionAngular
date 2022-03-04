import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tragaperras',
  templateUrl: './tragaperras.component.html',
  styleUrls: ['./tragaperras.component.css']
})
export class TragaperrasComponent implements OnInit {
  valor1: number;
  valor2: number;
  valor3: number;
  resultado: string="";
  @Input() credito: number=30;
  @Input() premio: string='';
  constructor() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
  }

  retornarAleatorio() {
    return Math.trunc(Math.random() * 9) + 1;
  }

  jugar() {
    if(this.credito>=5){
      this.valor1 = this.retornarAleatorio();
      this.valor2 = this.retornarAleatorio();
      this.valor3 = this.retornarAleatorio();
      this.credito= this.credito - 5;
      if (this.valor1==this.valor2 && this.valor1==this.valor3 && this.valor1==9)   {
      this.credito= this.credito + 1000; 
        this.resultado='Ganó';
        this.premio ='El premio es de 1000€';
      }else if(this.valor1==this.valor2 || this.valor1==this.valor3 || this.valor2==this.valor3){
        this.credito= this.credito + 5; 
        this.resultado='Ganó';
        this.premio ='El premio es de 5€';
      }else if(this.valor1==this.valor2 && this.valor1==this.valor3){
        this.credito= this.credito + 20; 
        this.resultado='Ganó';
        this.premio ='El premio es de 20€';
      }else{
        this.resultado='Perdió';
        this.premio ='No hay premio';
      }
    }else{
      this.resultado='No te quedan creditos';
    }
    
  }
  ngOnInit(): void {
  }

}
