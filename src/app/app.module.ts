import { NgModule } from '@angular/core';
/* Angular Material */
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientiComponent } from './pages/clienti/clienti.component';
import { FattureComponent } from './pages/fatture/fatture.component';
import { ProdottiComponent } from './pages/prodotti/prodotti.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleWidgetsComponent } from './shared/components/simple-widgets/simple-widgets.component';
import { HttpClientModule } from '@angular/common/http';
import { NavRouterLinksComponent } from './shared/components/nav-router-links/nav-router-links.component';
import { ClientiNuovoComponent } from './pages/clienti/clienti-nuovo/clienti-nuovo.component';
import { ClientiModificaComponent } from './pages/clienti/clienti-modifica/clienti-modifica.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteDetailComponent } from './pages/clienti/cliente-detail/cliente-detail.component';
import { FatturaDetailComponent } from './pages/fatture/fattura-detail/fattura-detail.component';
import { FattureModificaComponent } from './pages/fatture/fatture-modifica/fatture-modifica.component';
import { FattureNuovaComponent } from './pages/fatture/fatture-nuova/fatture-nuova.component';
import { BoxDetailComponent } from './shared/components/box-detail/box-detail.component';
import { TableComponent } from './shared/components/table/table.component';
import { OptionForPrincipalTableComponent } from './shared/components/option-for-principal-table/option-for-principal-table.component';
import { ConfirmDialogComponent } from './shared/components/dialogs/confirm-dialog/confirm-dialog.component';
import { TableSkeletonComponent } from './shared/components/loadings/skeletons/table-skeleton/table-skeleton.component';
import { ContainerSkeletonComponent } from './shared/components/loadings/skeletons/container-skeleton/container-skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent,
    DashboardComponent,
    ClientiComponent,
    FattureComponent,
    ProdottiComponent,
    SimpleWidgetsComponent,
    NavRouterLinksComponent,
    ClientiNuovoComponent,
    ClientiModificaComponent,
    ClienteDetailComponent,
    FatturaDetailComponent,
    FattureModificaComponent,
    FattureNuovaComponent,
    BoxDetailComponent,
    TableComponent,
    OptionForPrincipalTableComponent,
    ConfirmDialogComponent,
    TableSkeletonComponent,
    ContainerSkeletonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
