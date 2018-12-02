import { Component, OnInit } from '@angular/core';
import { size } from '../add-event-section-icon/add-event-section-icon.component';

@Component({
  selector: 'app-add-event-resource-dialog',
  templateUrl: './add-event-resource-dialog.component.html',
  styleUrls: ['./add-event-resource-dialog.component.scss']
})
export class AddEventResourceDialogComponent implements OnInit {

  size: size = size.large;
  iconLink: String = "assets/icons/gift-box_indigo.svg";

  constructor() { }

  ngOnInit() {
  }
}
