import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-event-new-item',
  templateUrl: './add-event-new-item.component.html',
  styleUrls: ['./add-event-new-item.component.scss']
})
export class AddEventNewItemComponent implements OnInit {

  @Input()
  itemTitle: String;

  constructor() { }

  ngOnInit() {
  }

}
