import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../location.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  add(location: Location) {
  }
}
