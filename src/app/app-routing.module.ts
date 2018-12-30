import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'eventos/agregar',
    loadChildren: './add-event/add-event.module#AddEventModule'
  },
  {
    path: 'eventos/gestion',
    loadChildren: './event-management/event-management.module#EventManagementModule'
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
