import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { JuegoComponent } from './juego/juego.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
    path:'Api',
    component:ApiComponent
  },
  {
    path:'Pipes',
    component:PipesComponent
  },
  {
    path:'Juego',
    component:JuegoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
