import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:8080/api' ;

@Injectable({
  providedIn: 'root'
})


export class TestService {

  constructor(private http: HttpClient) { }

  getTest(type):Observable <any>{
    return this.http.get(API_URL + '/admin/test/' + type) ;
  }
  updateTest():Observable<any>{
    return this.http.post(API_URL + '/admin/updateTests', {
    });
  }
  submit_application ( form ) {
      return this.http.post(API_URL + '/application/submit',{
        _id: form.id,
        test: form.test,
        offer: form.offer,
        responses: form.responses
      })
  }

}

