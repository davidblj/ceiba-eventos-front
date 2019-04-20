import { Component, OnInit, Inject } from '@angular/core';
import { InquiryModalData, InquiryModalStateResponse } from '../../interfaces/inquiry-modal-data.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inquiry-dialog',
  templateUrl: './inquiry-dialog.component.html',
  styleUrls: ['./inquiry-dialog.component.scss']
})
export class InquiryDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: InquiryModalData, 
              private dialogReference: MatDialogRef<InquiryDialogComponent>) { }

  ngOnInit() {
  }

  leftButtonClickHandler() {
    this.dialogReference.close(InquiryModalStateResponse.clickedOnLeftButton);
  }

  rightButtonClickHandler() {
    this.dialogReference.close(InquiryModalStateResponse.clickedOnRightButton);
  }
}
