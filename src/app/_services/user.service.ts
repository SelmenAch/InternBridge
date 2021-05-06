import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8000/api/candidate/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  
  change_password(user): Observable<any> {
    return this.http.post(API_URL + 'change_password', {
      _id: user._id,
      oldPass: user.oldPass,
      newPass: user.newPass
    }, httpOptions);
  }

  create_cv(user): Observable<any> {
    return this.http.post(API_URL + 'create_cv', {
      _id: user._id,
      address: user.address,
		  age: user.age,
		  bio: user.bio,
		  phoneNumber: user.phoneNumber,
		  experiences: user.experiences,
		  educations: user.educations,
		  skills: user.skills,
		  languages: user.languages,
		  hobbies: user.hobbies,
		  socialLinks: user.socialLinks
    }, httpOptions);
  }

  edit_cv(user): Observable<any> {
    return this.http.post(API_URL + 'edit_cv', {
      _id: user._id,
      address: user.address,
		  age: user.age,
		  bio: user.bio,
		  phoneNumber: user.phoneNumber,
		  experiences: user.experiences,
		  educations: user.educations,
		  skills: user.skills,
		  languages: user.languages,
		  hobbies: user.hobbies,
		  socialLinks: user.socialLinks
    }, httpOptions);
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getCandidateBoard(): Observable<any> {
    return this.http.get(API_URL + 'candidate', { responseType: 'text' });
  }

  getRecruiterBoard(): Observable<any> {
    return this.http.get(API_URL + 'recruiter', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

}
