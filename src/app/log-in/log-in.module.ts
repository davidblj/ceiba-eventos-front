import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogInPresentationComponent } from './components/log-in-presentation/log-in-presentation.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { LogInRoutingModule } from './log-in-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    LogInComponent, 
    LogInPresentationComponent, 
    LogInFormComponent
  ],
  imports: [
    CommonModule,
    LogInRoutingModule,
    MaterialModule
  ]
})
export class LogInModule { }
