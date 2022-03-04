import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarrademenuComponent } from './barrademenu/barrademenu.component';
import { ApiComponent } from './api/api.component';
import {HttpClientModule} from '@angular/common/http';
import { PipesComponent } from './pipes/pipes.component';
import { JuegoComponent } from './juego/juego.component';
import { TragaperrasComponent } from './tragaperras/tragaperras.component';
import { IconoComponent } from './tragaperras/icono/icono.component';
import { ConversorPipe } from './conversor.pipe';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BarrademenuComponent,
    ApiComponent,
    PipesComponent,
    JuegoComponent,
    TragaperrasComponent,
    IconoComponent,
    ConversorPipe,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
