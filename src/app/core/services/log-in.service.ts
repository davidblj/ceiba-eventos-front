import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../shared/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  currentAuthenticatedUser: User;
  redirectionUrl: string;

  constructor(private http: HttpClient) { }

  authenticate(user: User) {

    return this.http.post(`session`, user, { observe: 'response' }).pipe(
           map(this.handleSuccessfulAuthentication()));
  }

  handleSuccessfulAuthentication() {
    
    return (response: HttpResponse<User>) => { 

      this.currentAuthenticatedUser = response.body;
      
      const authenticationHeader = response.headers.get('Authentication');
      const jwtToken = this.getJwtToken(authenticationHeader);

      localStorage.setItem('ceiba-authenticated-user', JSON.stringify(response.body));
      localStorage.setItem('authentication-token', jwtToken);
      return response;
    };
  }

  getJwtToken(authenticationHeader: String) {

    return authenticationHeader.split(" ")[1];
  }

  postAuthenticationActionShouldReroute() {

    return this.redirectionUrl ? true : false;
  }
}
