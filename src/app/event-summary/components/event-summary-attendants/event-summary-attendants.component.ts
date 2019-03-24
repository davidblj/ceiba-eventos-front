import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-summary-attendants',
  templateUrl: './event-summary-attendants.component.html',
  styleUrls: ['./event-summary-attendants.component.scss']
})
export class EventSummaryAttendantsComponent implements OnInit {

  attendants = [
    {
      name: "David Jaramillo", 
      date: '24-06, 03:59', 
      resources: [
        {
          name: 'Beers',
          quantity: 2
        },
        {
          name: 'Pistachios bag',
          quantity: 1
        }
      ],
      organizer: 'Laura Bollago',
      location: 'Personal Soft'
    },
    {
      name: 'Daniel Correa', 
      date: '24-06, 04:01', 
      resources: [
        {
          name: 'Beers',
          quantity: 1
        },
        {
          name: 'Pistachios bag',
          quantity: 2
        }
      ],
      organizer: 'Laura Bollago',
      location: 'Personal Soft'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
