import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormConfig } from './form-config';
import { SectionInformation } from '../../shared/section-information.interface';
import { MatDialog } from '@angular/material/dialog';
import { AddEventResourceDialogComponent } from '../add-event-resource-dialog/add-event-resource-dialog.component';
import { Item } from '../../shared/item.interface';
import { AddEventInputDialogComponent } from '../add-event-input-dialog/add-event-input-dialog.component';
import { DialogCreator } from '../../shared/dialogs/dialog-creator';
import { FormArrayLengthValidator } from 'src/app/shared/validators/form-array-length.validator';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.scss']
})
export class AddEventFormComponent implements OnInit {

  @Input()
  loading: boolean;

  @Output()
  onAddNewEvent = new EventEmitter<Event>();

  formConfig: FormConfig;
  form: FormGroup;
  inputSectionInfo: SectionInformation;
  resourceSectionInfo: SectionInformation;
  resourceDialogCreator: DialogCreator;
  inputDialogCreator: DialogCreator;
  spinnerWidth = 56;

  constructor(private fb: FormBuilder,
              public dialog: MatDialog) { }

  ngOnInit() {

    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(24)
      ]],
      description: [null, [
        Validators.minLength(10),
        Validators.maxLength(150)
      ]],
      resources: this.fb.array([], FormArrayLengthValidator()),
      inputs: this.fb.array([])
    });

    this.instantiateFormConfiguration();
    this.buildResourceSectionInfo();
    this.buildInputSectionInfo();
    this.buildDialogCreators();
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
    };
  }

  buildInputSectionInfo() {

    this.inputSectionInfo = {
      iconLink: 'assets/icons/currency.svg',
      itemName: 'material',
      sectionTitle: 'Materiales'
    };
  }

  buildDialogCreators() {
    
    this.resourceDialogCreator = new DialogCreator(this.dialog, AddEventResourceDialogComponent,
      'resources', this.form);
    this.inputDialogCreator = new DialogCreator(this.dialog, AddEventInputDialogComponent,
      'inputs', this.form);
  }

  onNewResourceHandler() {
    this.resourceDialogCreator.handleNewInput();
  }

  onEditResourceHandler(index: number) {
    this.resourceDialogCreator.handleInputUpdate(index);
  }

  onDeleteResourceHandler(index: number) {
    this.resourceDialogCreator.handleInputDelete(index);
  }

  onNewInputHandler() {
    this.inputDialogCreator.handleNewInput();
  }

  onEditInputHandler(index: number) {
    this.inputDialogCreator.handleInputUpdate(index);
  }

  onDeleteInputHandler(index: number) {
    this.inputDialogCreator.handleInputDelete(index);
  }

  onSubmitHandler() {
    const event = this.form.value as Event;
    this.onAddNewEvent.emit(event);
  }

  // utils

  get resources() {
    return this.form.value.resources as Item[];
  }

  get inputs() {
    return this.form.value.inputs as Item[];
  }
}
