import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  condidate_login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'candidate_signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  recruiter_login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'recruiter_signin', {
      company: credentials.company,
      password: credentials.password
    }, httpOptions);
  }

  register_candidate(user): Observable<any> {
    return this.http.post(AUTH_API + 'candidate_signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      phoneNumber: user.phoneNumber,
      dateOfBirth: user.dateOfBirth
    }, httpOptions);
  }

  register_recruiter(user): Observable<any> {
    return this.http.post(AUTH_API + 'recruiter_signup', {
      company: user.company,
      password: user.password,
      address1: user.address1,
      address2: user.address2,
      city: user.city,
      province: user.province,
      zip: user.zip,
      country: user.country
    }, httpOptions);
  }
}
