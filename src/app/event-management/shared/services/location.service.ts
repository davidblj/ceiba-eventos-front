import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../location.interface';
import { Observable } from 'rxjs';
import { Locations } from '../locations.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  add(location: Location) {
    return this.http.post(`events/locations`, location);
  }

  get(): Observable<Locations> {
    return this.http.get<Locations>(`events/locations`);
  }
}
