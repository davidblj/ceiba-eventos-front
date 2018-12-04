import { Component, OnInit, Input } from '@angular/core';

export enum size {
  regular = 1,
  large
}

@Component({
  selector: 'app-add-event-section-icon',
  templateUrl: './add-event-section-icon.component.html',
  styleUrls: ['./add-event-section-icon.component.scss']
})
export class AddEventSectionIconComponent implements OnInit {

  @Input()
  source: String;

  @Input()
  size: size = size.regular;

  constructor() { }

  ngOnInit() {
  }

  isOfType(size: size): boolean {
    return size === this.size
  }
}
