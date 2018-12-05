import { Component, OnInit, Inject } from '@angular/core';
import { size } from '../add-event-section-icon/add-event-section-icon.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormConfig } from '../../shared/form-config';
import { NumericValidator } from '../../shared/numeric.validator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-event-resource-dialog',
  templateUrl: './add-event-resource-dialog.component.html',
  styleUrls: ['./add-event-resource-dialog.component.scss']
})
export class AddEventResourceDialogComponent implements OnInit {

  formConfig: FormConfig;
  form: FormGroup;

  size: size = size.large;
  iconLink: String = "assets/icons/gift-box_indigo.svg";

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
      ]],
      amount: [ '' ]
    });

    this.patchForm();
    this.instantiateFormConfiguration();
  }

  patchForm() {
    
    if (this.data) {
      const resource = this.data.item.value;      
      this.form.patchValue(resource);
    }
  }

  instantiateFormConfiguration() {
    this.formConfig = new FormConfig(this.form);
  }

  onClickHandler() {    
    this.dialogRef.close(this.form);
  }
}
