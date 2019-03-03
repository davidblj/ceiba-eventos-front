import { Component, OnInit } from '@angular/core';
import { AddEventFeedbackDialogComponent } from '../../components/add-event-feedback-dialog/add-event-feedback-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EventService } from 'src/app/core/services/event.service';
import { Event } from 'src/app/shared/interfaces/event.interface';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  loading: boolean;

  constructor(public dialogService: MatDialog,
    private eventService: EventService) { }

  ngOnInit() {
  }

  onAddNewEventHandler(event: Event) {

    console.log(event);
    this.loading = true;
    this.eventService.add(event).subscribe(
      this.handleSuccessfullResponse(),
      this.handleFailedResponse()
    );
  }

  handleSuccessfullResponse() {

    return (response) => {

      this.loading = false;
      this.openDialog({ responseSucceed: true});
    };
  }

  handleFailedResponse() {

    return (error) => {

      this.loading = false;
      this.openDialog({ responseSucceed: false});
    };
  }

  openDialog(data) {

    return this.dialogService.open(AddEventFeedbackDialogComponent, {
      width: '80vw',
      panelClass: 'dialog',
      data
    });
  }
}
