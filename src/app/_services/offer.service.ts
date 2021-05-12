import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = "http://localhost:8080/api/" ;
@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }
  getKeywords(_offer){
    return this.http.get(API_URL + "offers/" + _offer + "/get_keywords") ;
  }
  get_offer(_offer) {
    return this.http.get(API_URL + "offers/" + _offer + "/get_offer");
  }
}
