import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-footer',
  templateUrl: './form-footer.component.html',
  styleUrls: ['./form-footer.component.scss']
})
export class FormFooterComponent implements OnInit {

  @Input()
  loading: boolean;

  @Input()
  disabled: boolean;

  @Output()
  onSubmit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmitHandler() {
    this.onSubmit.emit();
  }
}
