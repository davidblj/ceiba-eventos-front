import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFooterComponent } from './components/form-footer/form-footer.component';
import { MaterialModule } from '../material/material.module';
import { FeedbackDialogComponent } from './components/feedback-dialog/feedback-dialog.component';
import { InquiryDialogComponent } from './components/inquiry-dialog/inquiry-dialog.component';

@NgModule({
  declarations: [
    FormFooterComponent,
    FeedbackDialogComponent,
    InquiryDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FormFooterComponent,
    FeedbackDialogComponent
  ],
  entryComponents: [
    FeedbackDialogComponent,
    InquiryDialogComponent
  ]
})
export class SharedModule { }
