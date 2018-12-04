import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SectionInformation } from '../../shared/section-information.interface'
import { Item } from '../../shared/item.interface';

@Component({
  selector: 'app-add-event-new-item-section',
  templateUrl: './add-event-new-item-section.component.html',
  styleUrls: ['./add-event-new-item-section.component.scss']
})
export class AddEventNewItemSectionComponent implements OnInit {

  @Input()
  sectionInformation: SectionInformation;

  @Input()
  items: Item[];

  @Output()
  onNewItem: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  // todo: refactor.
  onClickHandler() {
    this.onNewItem.emit(this.sectionInformation.sectionTitle);
  }
}
