import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventService } from 'src/app/core/services/event.service';
import { Event } from 'src/app/shared/interfaces/event.interface';
import { ModalData, Status } from 'src/app/shared/interfaces/modal-data.interface';
import { FeedbackDialogComponent } from 'src/app/shared/components/feedback-dialog/feedback-dialog.component';

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

    // TODO: this dialogs should be open by the presentational components (?)
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
      this.openDialog(this.buildSuccessModalData());
    };
  }

  handleFailedResponse() {

    return (error) => {

      this.loading = false;
      this.openDialog(this.buildFailedModalData());
    };
  }

  openDialog(data: ModalData) {

    return this.dialogService.open(FeedbackDialogComponent, {
      width: '80vw',
      panelClass: 'dialog',
      data
    });
  }

  buildFailedModalData(): ModalData {

    return {
      status: Status.fail,
      message: "Oops! algo ocurrio mal, intentalo de nuevo.",
      iconSource: "assets/icons/sad.svg",
    };
  }

  buildSuccessModalData(): ModalData {
    
    return {
      status: Status.fail,
      message: "Se guardó el evento.",
      iconSource: "assets/icons/confetti.svg",
      successButtonMessage: "Gestionar"
    };
  }

}
