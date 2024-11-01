import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiComponent } from './clienti.component';

const routes: Routes = [
  {
    path: '',
    component: ClientiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientiRoutingModule {}
