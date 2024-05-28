import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicarServicioPage } from './publicar-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: PublicarServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicarServicioPageRoutingModule {}
