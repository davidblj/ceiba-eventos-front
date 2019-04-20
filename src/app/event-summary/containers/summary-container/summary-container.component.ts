import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/service/event.service';
import { EventSummary } from '../../shared/event-summary.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-summary-container',
  templateUrl: './summary-container.component.html',
  styleUrls: ['./summary-container.component.scss']
})
export class SummaryContainerComponent implements OnInit {

  eventSummary$: Observable<EventSummary>;
  eventId: number;

  constructor(private eventService: EventService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {    
    this.summary();
  }

  summary() {
        
    this.route.params.subscribe(params => {

      this.eventId = params['id'];
      this.getEventSummary();
    });
  }

  getEventSummary() {    
    this.eventSummary$ = this.eventService.getSummaryFrom(this.eventId);
  }  

  onEventArchive() {

    this.eventService.updateStatusIn(this.eventId).subscribe(
      this.handleSuccessfulResponse());
  }

  handleSuccessfulResponse() {

    return () => {
      // todo: reroute it to the statistics page
      this.router.navigate(['eventos', 'categorias']);
    };
  }
}
