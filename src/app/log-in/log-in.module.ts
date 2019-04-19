import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { LogInRoutingModule } from './log-in-routing.module';
import { MaterialModule } from '../material/material.module';
import { LogInSubmitComponent } from './components/log-in-submit/log-in-submit.component';
import { LogInFormFieldComponent } from './components/log-in-form-field/log-in-form-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormContainerComponent } from './containers/form-container/form-container.component';
import { LogInService } from '../core/services/log-in.service';
import { LogInSnackbarComponent } from './components/log-in-snackbar/log-in-snackbar.component';

@NgModule({
  declarations: [
    LogInComponent, 
    LogInFormComponent, 
    LogInSubmitComponent, 
    LogInFormFieldComponent, 
    FormContainerComponent, 
    LogInSnackbarComponent
  ],
  imports: [
    CommonModule,
    LogInRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    LogInSnackbarComponent  
  ]
})
export class LogInModule { }
