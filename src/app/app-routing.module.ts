import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
    path:'Api',
    component:ApiComponent
  },
  {
    path:'Pipes',
    component:PipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
