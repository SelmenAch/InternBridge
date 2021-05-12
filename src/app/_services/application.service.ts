import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = "http://localhost:8080/api/" ;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }
  submit_application(form){
    return this.http.post(API_URL + "application/submit" , {
      _candidat: form._candidat,
      _offer: form._offer, //This must be offer id 
      _testCreated: form._testCreated,
      score: form.score
    }, httpOptions );
  }
}
