import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EstoquesRoutingModule} from './estoques-routing.module';
import {EstoquesComponent} from './estoques/estoques.component';
import { SharedModule } from './../shared/shared.module';
import {AppMaterialModule} from "../shared/app-material/app-material.module";


@NgModule({
  declarations: [
    EstoquesComponent
  ],
  imports: [
    CommonModule,
    EstoquesRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class EstoquesModule {
}
