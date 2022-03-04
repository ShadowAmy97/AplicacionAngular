import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormularioService } from '../formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  datos!:string;
  resultado!: string;
  
  formularioContacto = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(10)]],
    mail: ['', [Validators.required, Validators.email]],
    ciudad: ['',[Validators.required]],
  });

  submit() {
    this.datos=`Nombre=${this.formularioContacto.value.nombre}
                Mail=${this.formularioContacto.value.mail}
                Ciudad=${this.formularioContacto.value.ciudad}
                `;
    if (this.formularioContacto.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
  

  constructor(private fb: FormBuilder, private articulosServicio: FormularioService) { }

  ngOnInit(): void {
  }


  formulario:any;
  
  form={
    nombre:"",
    mail:"",
    ciudad:""
  }

  alta() {
    this.articulosServicio.alta(this.form).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
      }
    });
  }
}
