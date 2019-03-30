import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventSummary } from '../event-summary.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getSummaryFrom(eventId: number): Observable<EventSummary> {
    return this.http.get<EventSummary>(`events/${eventId}`);
  }
}
