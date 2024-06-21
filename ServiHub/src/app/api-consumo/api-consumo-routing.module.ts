import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiConsumoPage } from './api-consumo.page';

const routes: Routes = [
  {
    path: '',
    component: ApiConsumoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiConsumoPageRoutingModule {}
