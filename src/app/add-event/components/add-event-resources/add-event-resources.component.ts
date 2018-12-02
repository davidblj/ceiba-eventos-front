import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEventResourceDialogComponent } from '../add-event-resource-dialog/add-event-resource-dialog.component';

@Component({
  selector: 'app-add-event-resources',
  templateUrl: './add-event-resources.component.html',
  styleUrls: ['./add-event-resources.component.scss']
})
export class AddEventResourcesComponent implements OnInit {

  itemTitle = "recurso"
  iconLink = "assets/icons/gift-box.svg"

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onClickHandler() {
    this.dialog.open(AddEventResourceDialogComponent, {
      width: '80vw',      
      panelClass: 'dialog'
    })
  }
}
