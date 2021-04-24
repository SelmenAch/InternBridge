import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/recruiter/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  constructor(private http: HttpClient) { }

  
  change_password(user): Observable<any> {
    return this.http.post(API_URL + 'change_password', {
      _id: user._id,
      oldPass: user.oldPass,
      newPass: user.newPass
    }, httpOptions);
  }

  edit_profile(user): Observable<any> {
    return this.http.post(API_URL + 'edit_profile', {
      _id: user._id,
      address: user.address,
		  city: user.city,
		  province: user.province,
		  country: user.country,
		  description: user.description,
		  website: user.website
    }, httpOptions);
  }

}
