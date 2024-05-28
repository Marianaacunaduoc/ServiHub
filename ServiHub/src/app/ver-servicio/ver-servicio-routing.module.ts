import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerServicioPage } from './ver-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: VerServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerServicioPageRoutingModule {}
