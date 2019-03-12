import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EmployeeService } from '../../shared/services/employee.service';
import { Employee } from '../../shared/employee.inerface';
import { FormControl } from '@angular/forms';
import { SearchTextInputComponent } from '../../components/event-management-form-fields/search-text-input/search-text-input.component';

@Component({
  selector: 'app-attendant-input-container',
  templateUrl: './attendant-input-container.component.html',
  styleUrls: ['./attendant-input-container.component.scss']
})
export class AttendantInputContainerComponent implements OnInit {

  @ViewChild(SearchTextInputComponent)
  searchTextInputComponent: SearchTextInputComponent;

  @Input()
  employeeIdControl: FormControl;

  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  onTextInputHandler(employee: String) {

    if (employee) {      
      this.handleNewAttendantRequestFor(employee);
    } else {
      this.employees = [];
    }
  }

  handleNewAttendantRequestFor(employee: String) {

    this.employeeService.getBy(employee).subscribe(
      result => this.employees = result.employees
    );
  }

  resetInput() {
    this.searchTextInputComponent.resetSearchTextControl();
  }
}
