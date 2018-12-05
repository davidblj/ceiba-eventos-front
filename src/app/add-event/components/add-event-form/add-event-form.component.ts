import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FormConfig } from './form-config'
import { SectionInformation } from '../../shared/section-information.interface';
import { MatDialog } from '@angular/material/dialog';
import { AddEventResourceDialogComponent } from '../add-event-resource-dialog/add-event-resource-dialog.component';
import { Item } from '../../shared/item.interface';
import { AddEventInputDialogComponent } from '../add-event-input-dialog/add-event-input-dialog.component';

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
      resources: this.fb.array([]),
      inputs: this.fb.array([])
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

  // todo: refactor
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

  onNewInputHandler() {    

    let resourceDialog = this.openInputDialog(null);
    resourceDialog.afterClosed().subscribe(this.onNewInputDialogClosed());
  }

  onNewInputDialogClosed() {
    
    return (input: FormGroup) => {
      if (input) this.inputsFormArray.push(input);          
    }
  }

  onEditInputHandler(index: number) {

    let input = this.inputsFormArray.at(index);
    let resourceDialog = this.openInputDialog({input});
    resourceDialog.afterClosed().subscribe(this.onEditInputDialogClosed(index));
  }

  onEditInputDialogClosed(index: number) {

    return (input: FormGroup) => {
      if (input) this.inputsFormArray.setControl(index, input);        
    }
  }

  onDeleteInputHandler(index: number) {
    this.inputsFormArray.removeAt(index);
  }

  // utils

  openResourceDialog(data) {

    return this.dialog.open(AddEventResourceDialogComponent, {
      width: '80vw',      
      panelClass: 'dialog',
      data    
    });
  }

  openInputDialog(data) {

    return this.dialog.open(AddEventInputDialogComponent, {
      width: '80vw',      
      panelClass: 'dialog',
      data    
    });
  }

  get resourcesFormArray() {
    return this.form.get('resources') as FormArray;
  }

  get inputsFormArray() {
    return this.form.get('inputs') as FormArray;
  }

  get resources() {
    return this.form.value.resources as Item[];
  }

  get inputs() {
    return this.form.value.inputs as Item[];
  }
}
