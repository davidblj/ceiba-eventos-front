import { Component, OnInit } from '@angular/core';
import { size } from '../add-event-section-icon/add-event-section-icon.component';

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

  constructor() { }

  ngOnInit() {
  }
}
