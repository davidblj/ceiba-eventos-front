import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event-resources',
  templateUrl: './add-event-resources.component.html',
  styleUrls: ['./add-event-resources.component.scss']
})
export class AddEventResourcesComponent implements OnInit {

  itemTitle = "recurso"
  iconLink = "assets/icons/gift-box.svg"

  constructor() { }

  ngOnInit() {
  }
}
