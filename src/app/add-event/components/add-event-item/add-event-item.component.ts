import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '../../shared/item.interface';

@Component({
  selector: 'app-add-event-item',
  templateUrl: './add-event-item.component.html',
  styleUrls: ['./add-event-item.component.scss']
})
export class AddEventItemComponent implements OnInit {

  @Input()
  item: Item;

  @Input()
  favorite;

  @Output()
  onClick = new EventEmitter<String>();

  @Output()
  onDelete = new EventEmitter<any>();

  @Output()
  onEdit = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  isFavored(): boolean {
    return this.favorite === this.item.name;
  }

  emitOnClick() {

    if (this.isFavored()) {
      this.onClick.emit("");
    } else {
      this.onClick.emit(this.item.name);
    }
  }

  emitOnEdit() {
    this.onEdit.emit();
  }

  emitOnDelete() {
    this.onDelete.emit();
  }
}
