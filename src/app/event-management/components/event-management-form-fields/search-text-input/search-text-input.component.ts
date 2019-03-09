import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Employee } from 'src/app/event-management/shared/employee.inerface';

@Component({
  selector: 'app-search-text-input',
  templateUrl: './search-text-input.component.html',
  styleUrls: ['./search-text-input.component.scss']
})
export class SearchTextInputComponent implements OnInit {

  @Input()
  attendantControl: FormControl;

  @Input()
  employees: Employee[];

  @Output()
  onTextInput = new EventEmitter<String>();

  @Output()
  onSelect = new EventEmitter<any>();

  searchTextInputControl = new FormControl("");

  constructor() { }

  ngOnInit() {
    this.watchForChanges();
  }

  watchForChanges() {

    this.searchTextInputControl
        .valueChanges
        .pipe(debounceTime(700))
        .subscribe(value => this.onTextInput.emit(value));
  }

  onOptionSelectedHandler() {

    const userInput = this.searchTextInputControl.value;
    this.attendantControl.setValue(userInput);
  } 
}
