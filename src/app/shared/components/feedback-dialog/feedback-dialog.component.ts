import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalData, Status } from '../../interfaces/modal-data.interface';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss']
})
export class FeedbackDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalData) { }

  ngOnInit() {
    console.log(this.data);
  }

  get responseSucceed() {
    return this.data.status === Status.success ? true : false;
  }  

  shouldDisplaySuccessButtonMessage() {
    return this.data.successButtonMessage !== null ? true : false;
  }

  shouldDisplayDismissButtonMessage() {
    return this.data.dismissButtonMessage !== null ? true : false;
  }
}
