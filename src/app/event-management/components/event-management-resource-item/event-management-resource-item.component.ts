import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from 'src/app/shared/interfaces/resource.interface';
import { ResourceQuantity } from '../../shared/resource-quantity.interface';
import { LocalResourceQuantity } from '../../shared/local-resource-quantity';

@Component({
  selector: 'app-event-management-resource-item',
  templateUrl: './event-management-resource-item.component.html',
  styleUrls: ['./event-management-resource-item.component.scss']
})
export class EventManagementResourceItemComponent implements OnInit {

  @Input()
  resource: Resource;

  @Input()
  quantity: LocalResourceQuantity;

  @Input()
  favoriteResource: String;

  @Output()
  onAmauntChanged = new EventEmitter<ResourceQuantity>();

  constructor() { }

  ngOnInit() {
  }

  get stock() {
    return this.resource.stock;
  }

  get isFavorite() {
    return this.resource.name === this.favoriteResource;
  }

  get name() {
    const firstLetter = this.resource.name.charAt(0).toUpperCase();
    return firstLetter + this.resource.name.substring(1);
  }

  get minusOneUnit(): Number {
    return -1;
  }

  get plusOneUnit(): Number {
    return 1;
  }

  get controlsDisabledStatus(): Boolean {
    return this.quantity.availableQuantity === 0;
  }

  get oneUnitDownButtonDisabledStatus(): Boolean {
    return (this.quantity.localQuantity === 0);
  }

  emitOnAmountChanged(step: number) {

    // handle multiple consecutive tabs

    const amount = this.quantity.localQuantity + step;
    this.quantity.localQuantity = amount;
    this.onAmauntChanged.emit({resourceId: this.resource.id, amount: step});
  }
}
