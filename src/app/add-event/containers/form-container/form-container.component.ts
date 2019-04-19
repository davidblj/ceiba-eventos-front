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

    this.openDialog(this.buildSuccessModalData());

    this.loading = true;
    this.eventService.add(event).subscribe(
      this.handleSuccessfullResponse(),
      this.handleFailedResponse()
    );
  }

  sanitize(event: Event) {

    event.resources = event.resources.map( ({name, description, price, amount}) => ({            
        name, description, price: Number(price), amount: Number(amount)
      })
    );
    
    event.inputs = event.inputs.map( ({name, description, price}) => ({            
        name, description, price: Number(price)
      })
    );

    return event;
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

  // TODO: include the event id for the feedback dialog component to make redirection
  buildSuccessModalData(): ModalData {
    
    return {
      status: Status.success,
      message: "Se guardó el evento.",
      iconSource: "assets/icons/confetti.svg",
      successButtonMessage: "Gestionar"
    };
  }

}
