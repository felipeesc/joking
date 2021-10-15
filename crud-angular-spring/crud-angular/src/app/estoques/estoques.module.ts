import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EstoquesRoutingModule} from './estoques-routing.module';
import {EstoquesComponent} from './estoques/estoques.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    EstoquesComponent
  ],
  exports: [
    EstoquesComponent
  ],
  imports: [
    CommonModule,
    EstoquesRoutingModule,
    MatTableModule
  ]
})
export class EstoquesModule { }
