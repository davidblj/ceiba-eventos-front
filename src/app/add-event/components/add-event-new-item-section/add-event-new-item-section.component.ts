import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SectionInformation } from '../../shared/section-information.interface'


@Component({
  selector: 'app-add-event-new-item-section',
  templateUrl: './add-event-new-item-section.component.html',
  styleUrls: ['./add-event-new-item-section.component.scss']
})
export class AddEventNewItemSectionComponent implements OnInit {

  @Input()
  sectionInformation: SectionInformation;

  @Output()
  onNewItem: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
    console.log(this.sectionInformation)
  }

  // todo: refactor.
  onClickHandler() {
    this.onNewItem.emit(this.sectionInformation.sectionTitle);
  }
}
