import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Resource } from 'src/app/shared/interfaces/resource.interface';
import { EventResources } from 'src/app/shared/interfaces/event-resources.interface';
import { Event } from 'src/app/shared/interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {}

  add(event: Event): Observable<any> {
    return this.http.post('events', event);
  }
  
  getResources(eventId: number): Observable<EventResources> {
    return this.http.get<EventResources>(`events/${eventId}/resources`)
  }  
}
