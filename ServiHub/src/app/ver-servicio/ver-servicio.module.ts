import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerServicioPageRoutingModule } from './ver-servicio-routing.module';

import { VerServicioPage } from './ver-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerServicioPageRoutingModule
  ],
  declarations: [VerServicioPage]
})
export class VerServicioPageModule {}
