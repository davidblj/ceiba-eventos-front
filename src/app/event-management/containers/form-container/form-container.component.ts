import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../shared/services/location.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  constructor(private locationService: LocationService) { }

  ngOnInit() {
  }

  onAddNewLocationHandler(location: Location) {
    console.log(location);
  }
}
