import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FattureComponent } from './fatture.component';
import { FattureNuovaComponent } from './fatture-nuova/fatture-nuova.component';
import { FattureModificaComponent } from './fatture-modifica/fatture-modifica.component';
import { FatturaDetailComponent } from './fattura-detail/fattura-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FattureComponent,
  },
  {
    path: 'nuova',
    component: FattureNuovaComponent,
  },
  {
    path: 'modifica/:id',
    component: FattureModificaComponent,
  },
  {
    path: ':id',
    component: FatturaDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FattureRoutingModule {}
