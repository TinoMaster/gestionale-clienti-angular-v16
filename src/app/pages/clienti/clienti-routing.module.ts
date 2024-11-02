import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiComponent } from './clienti.component';
import { ClientiNuovoComponent } from './clienti-nuovo/clienti-nuovo.component';
import { ClientiModificaComponent } from './clienti-modifica/clienti-modifica.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ClientiComponent,
  },
  {
    path: 'nuovo',
    component: ClientiNuovoComponent,
  },
  {
    path: 'modifica/:id',
    component: ClientiModificaComponent,
  },
  {
    path: ':id',
    component: ClienteDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientiRoutingModule {}
