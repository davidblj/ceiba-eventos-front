import { Component, OnInit, Inject } from '@angular/core';
import { size } from '../add-event-section-icon/add-event-section-icon.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-event-feedback-dialog',
  templateUrl: './add-event-feedback-dialog.component.html',
  styleUrls: ['./add-event-feedback-dialog.component.scss']
})
export class AddEventFeedbackDialogComponent implements OnInit {

  succeessIconLink = "assets/icons/confetti.svg";
  failureIconLink = "assets/icons/sad.svg";
  size: size = size.large;
  succeed = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  get responsedSucceed() {
    return this.data.responseSucceed;
  }
}
