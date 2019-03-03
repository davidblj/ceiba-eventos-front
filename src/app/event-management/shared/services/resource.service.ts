import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceQuantity } from '../resource-quantity.interface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient) { }

  setResourceQuantityToEventId(resourceQuantity: ResourceQuantity, eventId: number): Observable<any> {
    return this.http.put(`events/${eventId}/resources/${resourceQuantity.resourceId}/stock/${resourceQuantity.amount}`, location);
  }
}
