import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'clienti',
    loadChildren: () =>
      import('./pages/clienti/clienti-routing.module').then(
        (m) => m.ClientiRoutingModule
      ),
  },
  {
    path: 'fatture',
    loadChildren: () =>
      import('./pages/fatture/fatture-routing.module').then(
        (m) => m.FattureRoutingModule
      ),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
