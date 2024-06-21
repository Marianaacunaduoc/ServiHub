import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiConsumoPageRoutingModule } from './api-consumo-routing.module';

import { ApiConsumoPage } from './api-consumo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiConsumoPageRoutingModule
  ],
  declarations: [ApiConsumoPage]
})
export class ApiConsumoPageModule {}
