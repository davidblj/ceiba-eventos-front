import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event-inputs',
  templateUrl: './add-event-inputs.component.html',
  styleUrls: ['./add-event-inputs.component.scss']
})
export class AddEventInputsComponent implements OnInit {

  iconLink = "assets/icons/currency.svg"
  itemTitle = "material"

  constructor() { }

  ngOnInit() {
  }

}
