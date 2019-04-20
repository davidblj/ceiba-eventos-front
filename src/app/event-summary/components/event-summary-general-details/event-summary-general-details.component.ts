import { Component, OnInit, Input } from '@angular/core';
import { EventSummary } from '../../shared/event-summary.interface';
import { InquiryModalData, InquiryModalStateResponse } from 'src/app/shared/interfaces/inquiry-modal-data.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InquiryDialogComponent } from 'src/app/shared/components/inquiry-dialog/inquiry-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-summary-general-details',
  templateUrl: './event-summary-general-details.component.html',
  styleUrls: ['./event-summary-general-details.component.scss']
})
export class EventSummaryGeneralDetailsComponent implements OnInit {

  @Input()
  eventSummary: EventSummary;

  constructor(public dialogService: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  onClickHandler() {
    
    this.openDialog();
  }

  openDialog() {

    this.dialogService.open<InquiryDialogComponent, any, InquiryModalStateResponse>
      (InquiryDialogComponent, this.buildDialogConfiguration()).afterClosed().subscribe();
  }

  buildDialogConfiguration() {

    return {
      width: '80vw',
      panelClass: 'dialog',
      data: this.buildInquiryModalData()
    };    
  }  

  buildInquiryModalData(): InquiryModalData {

    return {
      inquiry: '¿ Estás seguro/a de que deseas archivar el evento ?. Una vez que se archiva no se puede volver a gestionar el mismo',
      leftButtonMessage: 'archivar',
      rightButtonMessage: 'cancelar'
    };
  }

  handleOnDialogClosedEvent() {

    return (response: InquiryModalStateResponse) => {

      if (response === InquiryModalStateResponse.clickedOnLeftButton) {
        // todo: navigate into the stats view
      }
    };
  }

  get day() {
    return new Date(this.date).getDate();
  }

  get month() {
    return new Date(this.date).getMonth() + 1;
  }

  get date() {
    return this.eventSummary.insertionDate;
  }

}
