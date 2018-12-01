import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-event-section-icon',
  templateUrl: './add-event-section-icon.component.html',
  styleUrls: ['./add-event-section-icon.component.scss']
})
export class AddEventSectionIconComponent implements OnInit {

  @Input()
  source: String;

  constructor() { }

  ngOnInit() {
  }
}
