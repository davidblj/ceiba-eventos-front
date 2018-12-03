import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-event-amount',
  templateUrl: './add-event-amount.component.html',
  styleUrls: ['./add-event-amount.component.scss']
})
export class AddEventAmountComponent implements OnInit {

  @Input()
  control: FormControl;

  constructor() { }

  ngOnInit() {
  }

  goUp() {

    const current = this.getNumber(this.control.value);
    this.control.patchValue(current + 1);
  }

  goDown() {

    const current = this.getNumber(this.control.value);    
    if (current !== 0) this.control.patchValue(current - 1) 
    if (current === 1) this.control.patchValue(null);
  }

  private getNumber(value: any): number {
    return Number(value);
  }
}
