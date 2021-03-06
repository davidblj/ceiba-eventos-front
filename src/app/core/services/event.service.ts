import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventResources } from 'src/app/shared/interfaces/event-resources.interface';
import { Event } from 'src/app/shared/interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // TODO: this services are not global services, and hence, they should not be on this module
  constructor(private http: HttpClient) {}

  add(event: Event): Observable<any> {
    return this.http.post('events', event);
  }
  
  getResources(eventId: number): Observable<EventResources> {
    return this.http.get<EventResources>(`events/${eventId}/resources`);
  }  
}
