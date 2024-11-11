import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FattureComponent } from './fatture.component';
import { FattureNuovaComponent } from './fatture-nuova/fatture-nuova.component';
import { FattureModificaComponent } from './fatture-modifica/fatture-modifica.component';
import { FatturaDetailComponent } from './fattura-detail/fattura-detail.component';
import { ProdottoNuovoComponent } from '../prodotti/prodotto-nuovo/prodotto-nuovo.component';
import { ProdottoModificaComponent } from '../prodotti/prodotto-modifica/prodotto-modifica.component';
import { ProdottoDetailComponent } from '../prodotti/prodotto-detail/prodotto-detail.component';

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
  {
    path: ':idFattura/prodotto/nuovo',
    component: ProdottoNuovoComponent
  },
  {
    path: ':idFattura/prodotto/modifica/:id',
    component: ProdottoModificaComponent
  },
  {
    path: ':idFattura/prodotto/:id',
    component: ProdottoDetailComponent
  },{
    path: ':idFattura/prodotto',
    redirectTo: ':idFattura'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FattureRoutingModule {}
