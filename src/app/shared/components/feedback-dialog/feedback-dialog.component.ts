import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalData, Status } from '../../interfaces/modal-data.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss']
})
export class FeedbackDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalData, 
              private router: Router, 
              private dialogReference: MatDialogRef<FeedbackDialogComponent>) { }

  ngOnInit() {
    console.log(this.data);
  }

  get responseSucceed() {
    return this.data.status === Status.success ? true : false;
  }  

  shouldDisplaySuccessButtonMessage() {
    return this.data.successButtonMessage ? true : false;
  }

  shouldDisplayDismissButtonMessage() {
    return this.data.dismissButtonMessage ? true : false;
  }

  jumpInToManagementPage() {
    
    this.dialogReference.close();
    this.router.navigate(['/', 'eventos', 1, 'gestion']);
  }
}
