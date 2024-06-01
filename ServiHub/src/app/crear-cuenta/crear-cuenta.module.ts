import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCuentaPageRoutingModule } from './crear-cuenta-routing.module';

import { CrearCuentaPage } from './crear-cuenta.page';

import { MatDatepickerModule } from '@angular/material/datepicker';

import {MatSliderModule} from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCuentaPageRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSliderModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  declarations: [CrearCuentaPage]
})
export class CrearCuentaPageModule {}
