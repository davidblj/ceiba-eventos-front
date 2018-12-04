import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormConfig } from './form-config'
import { SectionInformation } from '../../shared/section-information.interface';
import { MatDialog } from '@angular/material/dialog';
import { AddEventResourceDialogComponent } from '../add-event-resource-dialog/add-event-resource-dialog.component';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.scss']
})
export class AddEventFormComponent implements OnInit {

  formConfig: FormConfig;
  form: FormGroup;
  inputSectionInfo: SectionInformation;
  resourceSectionInfo: SectionInformation;

  constructor(private fb: FormBuilder, 
              public dialog: MatDialog) { }

  ngOnInit() {
    
    this.form = this.fb.group({
      name: [ '', [
        Validators.required, 
        Validators.minLength(3),
        Validators.maxLength(24)
      ]],
      description: [ '', [
        Validators.minLength(10),
        Validators.maxLength(150)
      ]]
    });

    this.instantiateFormConfiguration();
    this.buildResourceSectionInfo();
    this.buildInputSectionInfo();
  }

  instantiateFormConfiguration() {
    this.formConfig = new FormConfig(this.form);
  }  

  buildResourceSectionInfo() {
    this.resourceSectionInfo = {
      iconLink: 'assets/icons/gift-box.svg',
      itemName: 'recurso',
      sectionTitle: 'Recursos'
    }
  }

  buildInputSectionInfo() {
    this.inputSectionInfo = {
      iconLink: 'assets/icons/currency.svg',
      itemName: 'material',
      sectionTitle: 'Materiales'
    }
  }

  newResourceHandler() {
    this.dialog.open(AddEventResourceDialogComponent, {
      width: '80vw',      
      panelClass: 'dialog'
    })
  }
}
