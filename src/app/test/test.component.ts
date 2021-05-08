import { OfferService } from './../_services/offer.service';
import { ApplicationService } from './../_services/application.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../_services/test.service' ;
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  ok = false ;
  responses: any = {};
  form: any = {};
  data = [];
  allQuestions = [] ;
  allOptions = [] ;
  greens = [];
  user: any = {};
  keywords :any = [] ;
  constructor(
              public router: Router, private testService : TestService , 
              private tokenStorage: TokenStorageService, 
              private applicatonService : ApplicationService,
              private offerService : OfferService,
              private _Activatedroute:ActivatedRoute
              ){ 
        this.form._offer=this._Activatedroute.snapshot.paramMap.get("id");
            }
  ngOnInit(): void {
    this.user = JSON.parse(this.tokenStorage.getUser());
    this.offerService.getKeywords(this.form._offer).subscribe(keyword => {
      console.log(keyword.join());
      this.testService.getTest("php,nodejs,java").subscribe(question => {
        question[0].map(question => this.allQuestions.push(question));
        question[1].map(option => this.allOptions.push(option));
        question[2].map(green => this.greens.push(green));
        this.form._testCreated = question[3][0] ;
        for (let i=0 ; i< this.allQuestions.length ; i++) {
          this.data.push([this.allQuestions[i] , this.allOptions[i],this.greens[i]]); 
        }
        this.ok = true;
        this.form._id = this.user.id ;
      })
  })
  }
  onSubmit() {
      console.log(this.responses);
      this.form.score = this.calculeScore();
      console.log(this.form);
      this.applicatonService.submit_application(this.form).subscribe(err => {
        console.log(err)
      });
      //this.router.navigate(['candidate']);

  }

  calculeScore(){
    let score = 0 ;
    for (let rep in this.responses) {
      if (this.responses[rep] === this.greens[rep]){
        score ++ ;
      }
    }
    return (score / this.greens.length) * 100 ;
  }

}
