import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-event-new-item',
  templateUrl: './add-event-new-item.component.html',
  styleUrls: ['./add-event-new-item.component.scss']
})
export class AddEventNewItemComponent implements OnInit {

  @Input()
  itemTitle: String;

  @Output()
  onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  emitOnClick() {
    this.onClick.emit();
  }
}
