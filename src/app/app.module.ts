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

@NgModule({
  declarations: [
    AppComponent,
    BarrademenuComponent,
    ApiComponent,
    PipesComponent,
    JuegoComponent,
    TragaperrasComponent,
    IconoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
