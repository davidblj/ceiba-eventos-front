import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormConfig } from './form-config';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogInSnackbarComponent } from '../log-in-snackbar/log-in-snackbar.component';
import { User } from 'src/app/core/shared/user.interface';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent implements OnInit {

  @Output()
  onAuthentication = new EventEmitter<User>();

  formConfig: FormConfig;
  form: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit() {
    
    this.form = this.fb.group({
      username: '',
      password: ''
    });

    this.instantiateFormConfiguration();
  }

  instantiateFormConfiguration() {
    this.formConfig = new FormConfig(this.form);
  }

  handleUnsuccessfulFormSubmit() {

    this.openSnackBar();
    this.resetUIState();
  }

  openSnackBar() {

    this.snackBar.openFromComponent(LogInSnackbarComponent, {
      duration: 2500, 
      horizontalPosition: 'center', 
      verticalPosition: 'top',
      panelClass: ['custom-snackbar-container--position-top', 
                   'custom-snackbar-container--status-warning']
    });
  }

  resetUIState() {

    this.form.reset();
  }

  onSubmitHandler() {

    const user = this.form.value as User;
    this.onAuthentication.emit(user);
  }
}
