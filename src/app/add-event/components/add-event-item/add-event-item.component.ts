import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../shared/item.interface';

@Component({
  selector: 'app-add-event-item',
  templateUrl: './add-event-item.component.html',
  styleUrls: ['./add-event-item.component.scss']
})
export class AddEventItemComponent implements OnInit {

  @Input()
  item: Item;

  constructor() { }

  ngOnInit() {
  }

}
