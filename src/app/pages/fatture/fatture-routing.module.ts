import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FattureComponent } from './fatture.component';
import { FattureNuovaComponent } from './fatture-nuova/fatture-nuova.component';
import { FattureModificaComponent } from './fatture-modifica/fatture-modifica.component';

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
    component: FattureNuovaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FattureRoutingModule {}
