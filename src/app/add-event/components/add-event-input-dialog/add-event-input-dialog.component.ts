import { Component, OnInit, Inject } from '@angular/core';
import { FormConfig } from '../../shared/form-config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEventResourceDialogComponent } from '../add-event-resource-dialog/add-event-resource-dialog.component';
import { NumericValidator } from '../../shared/numeric.validator';
import { size } from '../add-event-section-icon/add-event-section-icon.component';

@Component({
  selector: 'app-add-event-input-dialog',
  templateUrl: './add-event-input-dialog.component.html',
  styleUrls: ['./add-event-input-dialog.component.scss']
})
export class AddEventInputDialogComponent implements OnInit {

  formConfig: FormConfig;
  form: FormGroup;

  size: size = size.large;
  iconLink: String = "assets/icons/currency_indigo.svg";

  constructor(private fb: FormBuilder, 
              public dialogRef: MatDialogRef<AddEventResourceDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

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
      price: [ '', [
        Validators.required, 
        NumericValidator()
      ]]    
    });

    this.patchForm();
    this.instantiateFormConfiguration();
  }

  patchForm() {
    
    if (this.data) {
      const input = this.data.item.value;      
      this.form.patchValue(input);
    }
  }

  instantiateFormConfiguration() {
    this.formConfig = new FormConfig(this.form);
  }

  onClickHandler() {    
    this.dialogRef.close(this.form);
  }
}
