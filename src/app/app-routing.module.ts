import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'eventos/agregar',
    loadChildren: './add-event/add-event.module#AddEventModule'
  },
  {
    path: 'eventos/:id/gestion',
    loadChildren: './event-management/event-management.module#EventManagementModule'
  },
  {
    path: 'eventos/:id/detalles',
    loadChildren: './event-summary/event-summary.module#EventSummaryModule'
  },
  {
    path: '',
    redirectTo: 'eventos/agregar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
