import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DetallesComponent } from './components/detalles/detalles.component';

const routes: Routes = 
[
  { path: 'clientes', component: ClientesComponent },
  { path: 'detalles/:id', component: DetallesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'clientes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
