import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../shared/item.interface';

@Component({
  selector: 'app-event-management-location-item',
  templateUrl: './event-management-location-item.component.html',
  styleUrls: ['./event-management-location-item.component.scss']
})
export class EventManagementLocationItemComponent implements OnInit {

  @Input()
  item: String;

  @Input()
  selectedItem: String;

  @Output()
  onClick = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  emitOnClick() {
    this.onClick.emit(this.item);
  }

  get isSelected() {
    return this.item === this.selectedItem;
  }
}
