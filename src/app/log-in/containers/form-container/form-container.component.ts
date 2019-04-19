import { Component, OnInit, ViewChild } from '@angular/core';
import { LogInService } from '../../../core/services/log-in.service';
import { LogInFormComponent } from '../../components/log-in-form/log-in-form.component';
import { User } from 'src/app/core/shared/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  @ViewChild(LogInFormComponent)
  logInFormComponent: LogInFormComponent;

  constructor(private logInService: LogInService, private router: Router) { }

  ngOnInit() {
  }

  onAuthenticationHandler(user: User) {
    
    this.logInService.authenticate(user).subscribe(
      this.handleSuccessfullResponse(),
      this.handleFailedResponse());
  }

  handleSuccessfullResponse() {

    return () => {

      if (this.logInService.postAuthenticationActionShouldReroute()) {

        this.router.navigateByUrl(this.logInService.redirectionUrl);

      } else {

        this.router.navigate(['eventos', 'categorias']);
      }            
    };
  }

  handleFailedResponse() {

    return () => {

      this.logInFormComponent.handleUnsuccessfulFormSubmit();
    };
  }
}
