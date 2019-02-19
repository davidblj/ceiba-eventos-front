import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from 'src/app/shared/interfaces/resource.interface';
import { ManagedResource } from '../../shared/resource.interface';

@Component({
  selector: 'app-event-management-resource-item',
  templateUrl: './event-management-resource-item.component.html',
  styleUrls: ['./event-management-resource-item.component.scss']
})
export class EventManagementResourceItemComponent implements OnInit {

  @Input()
  resource: Resource;

  @Input()
  favoriteResource: String;

  @Input()
  amount: number;

  @Output()
  onAmauntChanged = new EventEmitter<ManagedResource>();

  constructor() { }

  ngOnInit() {
    this.amount = 0;
  }

  get stock() {
    return this.resource.stock;
  }

  get isFavorite() {
    return this.resource.name == this.favoriteResource;
  }

  get name() {
    const firstLetter = this.resource.name.charAt(0).toUpperCase();
    return firstLetter + this.resource.name.substring(1);
  }

  onAmountChanged(step: number) {
    const currentAmount = this.amount + step;
    this.onAmauntChanged.emit({name: this.resource.name, currentAmount});
  }
}
