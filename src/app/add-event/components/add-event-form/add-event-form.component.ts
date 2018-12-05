import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FormConfig } from './form-config'
import { SectionInformation } from '../../shared/section-information.interface';
import { MatDialog } from '@angular/material/dialog';
import { AddEventResourceDialogComponent } from '../add-event-resource-dialog/add-event-resource-dialog.component';
import { Item } from '../../shared/item.interface';

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
      ]],
      resources: this.fb.array([])
    });

    this.instantiateFormConfiguration();
    this.buildResourceSectionInfo();
    this.buildInputSectionInfo();
  }

  instantiateFormConfiguration() {
    this.formConfig = new FormConfig(this.form);
  }  

  // todo: refactor
  buildResourceSectionInfo() {

    this.resourceSectionInfo = {
      iconLink: 'assets/icons/gift-box.svg',
      itemName: 'recurso',
      sectionTitle: 'Recursos *'
    }
  }

  buildInputSectionInfo() {

    this.inputSectionInfo = {
      iconLink: 'assets/icons/currency.svg',
      itemName: 'material',
      sectionTitle: 'Materiales'
    }
  }

  onNewResourceHandler() {    

    let resourceDialog = this.openResourceDialog(null);
    resourceDialog.afterClosed().subscribe(this.onNewResourceDialogClosed());
  }

  onNewResourceDialogClosed() {
    
    return (resource: FormGroup) => {
      if (resource) this.resourcesFormArray.push(resource);          
    }    
  }

  onEditResourceHandler(index: number) {

    let resource = this.resourcesFormArray.at(index);
    let resourceDialog = this.openResourceDialog({resource});
    resourceDialog.afterClosed().subscribe(this.onEditResourceDialogClosed(index));
  }

  onEditResourceDialogClosed(index: number) {

    return (resource: FormGroup) => {
      if (resource) this.resourcesFormArray.setControl(index, resource);        
    }
  }

  onDeleteResourceHandler(index: number) {
    this.resourcesFormArray.removeAt(index);
  }

  // utils

  openResourceDialog(data) {

    return this.dialog.open(AddEventResourceDialogComponent, {
      width: '80vw',      
      panelClass: 'dialog',
      data    
    });
  }

  get resourcesFormArray() {
    return this.form.get('resources') as FormArray;
  }

  get resources() {
    return this.form.value.resources as Item[];
  }
}
