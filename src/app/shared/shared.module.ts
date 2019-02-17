import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFooterComponent } from './components/form-footer/form-footer.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [FormFooterComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FormFooterComponent
  ]
})
export class SharedModule { }
