import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicarServicioPageRoutingModule } from './publicar-servicio-routing.module';

import { PublicarServicioPage } from './publicar-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicarServicioPageRoutingModule
  ],
  declarations: [PublicarServicioPage]
})
export class PublicarServicioPageModule {}
