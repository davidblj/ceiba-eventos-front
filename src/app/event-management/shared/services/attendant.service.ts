import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Attendant } from '../attendant.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendantService {

  constructor(private http: HttpClient) { }

  add(attendant: Attendant): Observable<any> {
    return this.http.post(`attendants`, attendant);
  }   
}
