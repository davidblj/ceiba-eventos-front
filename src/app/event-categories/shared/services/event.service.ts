import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Event } from '../../shared/event.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEventsOn(finishedStatus: Boolean): Observable<Event[]> {

    const status = finishedStatus ? 1 : 0;
    const params = { params: new HttpParams().set('status', status.toString()) };

    return this.http.get<Event[]>(`events`, params);
  }  
}
