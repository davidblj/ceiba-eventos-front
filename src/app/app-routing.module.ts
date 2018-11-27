import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'eventos/agregar',
    loadChildren: './add-event/add-event.module#AddEventModule'
  },
  {
    path: '',
    redirectTo: '/parqueadero/vehiculos/agregar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
