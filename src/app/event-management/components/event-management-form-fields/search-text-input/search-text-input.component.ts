import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Employee } from 'src/app/event-management/shared/employee.inerface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-text-input',
  templateUrl: './search-text-input.component.html',
  styleUrls: ['./search-text-input.component.scss']
})
export class SearchTextInputComponent implements OnInit {

  @Input()
  employeeIdControl: FormControl;

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

  onOptionSelectedHandler(selectedEvent: MatAutocompleteSelectedEvent) {
            
    const userInput = this.searchTextInputControl.value;
    const selectedEmployee = this.employees.find(employee => employee.full_name === userInput);
    this.employeeIdControl.setValue(selectedEmployee.id);
  }

  resetSearchTextControl() {
    this.searchTextInputControl.setValue("");
  }
}
