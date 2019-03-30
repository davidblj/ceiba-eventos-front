import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/service/event.service';
import { EventSummary } from '../../shared/event-summary.interface';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-summary-container',
  templateUrl: './summary-container.component.html',
  styleUrls: ['./summary-container.component.scss']
})
export class SummaryContainerComponent implements OnInit {

  eventSummary: EventSummary;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {    
    this.summary();
  }

  summary() {
        
    this.route.params.subscribe(params => {

      const id = params['id'];
      this.getEventSummary(id);
    });
  }

  getEventSummary(id: number) {
    
    this.eventService.getSummaryFrom(id).subscribe(result => {
      this.eventSummary = result;
    });
  }  
}
