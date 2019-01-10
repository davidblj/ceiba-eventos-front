import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../location.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  add(location: Location, id: number) {
    return this.http.post(`events/${id}/locations`, location);
  }

  get(): Observable<Location[]> {
    return this.http.get<Location[]>(`events/locations`);
  }
}
