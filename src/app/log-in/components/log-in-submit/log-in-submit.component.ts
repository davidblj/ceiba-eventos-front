import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-log-in-submit',
  templateUrl: './log-in-submit.component.html',
  styleUrls: ['./log-in-submit.component.scss']
})
export class LogInSubmitComponent implements OnInit {

  @Output()
  onSubmit = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClickHandler() {
    this.onSubmit.emit();
  }

}
