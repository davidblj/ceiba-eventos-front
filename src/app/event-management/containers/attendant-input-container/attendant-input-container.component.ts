import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../shared/services/employee.service';
import { Employee } from '../../shared/employee.inerface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-attendant-input-container',
  templateUrl: './attendant-input-container.component.html',
  styleUrls: ['./attendant-input-container.component.scss']
})
export class AttendantInputContainerComponent implements OnInit {

  @Input()
  attendantControl: FormControl;

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
}
