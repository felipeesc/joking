import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EstoquesComponent} from "./estoques/estoques.component";

const routes: Routes = [
  {path: '', component: EstoquesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoquesRoutingModule {
}
