import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoquesRoutingModule } from './estoques-routing.module';
import { EstoquesComponent } from './estoques/estoques.component';


@NgModule({
  declarations: [
    EstoquesComponent
  ],
  exports: [
    EstoquesComponent
  ],
  imports: [
    CommonModule,
    EstoquesRoutingModule
  ]
})
export class EstoquesModule { }
