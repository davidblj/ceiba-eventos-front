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

  @Output()
  onEditItem: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  onDeleteItem: EventEmitter<number> = new EventEmitter<number>();

  favorite = "";

  constructor() { }

  ngOnInit() {
  }

  onNewItemHandler() {
    this.onNewItem.emit(this.sectionInformation.sectionTitle);
  }

  onNewFavoriteItemHandler(favorite: string) {
    this.favorite = favorite;
  }

  onEditHandler(index: number) {
    this.onEditItem.emit(index);
  }

  onDeleteHandler(index: number) {
    this.onDeleteItem.emit(index);
  }
}
