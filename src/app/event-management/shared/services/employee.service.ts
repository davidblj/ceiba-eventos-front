import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../employees.interface';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getBy(employeeName: String): Observable<Employees> {
    return this.http.get<Employees>(`employees/${employeeName}`);
  }
}
