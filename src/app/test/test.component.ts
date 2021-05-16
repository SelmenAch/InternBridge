import { OfferService } from './../_services/offer.service';
import { ApplicationService } from './../_services/application.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../_services/test.service' ;
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  applications: any = [];

  ok = false ;
  responses: any = {};
  form: any = {};
  data = [];
  allQuestions = [] ;
  allOptions = [] ;
  greens = [];
  user: any = {};
  keywords :any = [] ;
  testSubmitted: boolean ;
  constructor(private userService : UserService,
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

    this.getApplications();

        this.testService.getTest("php,nodejs").subscribe(question => {
        question[0].map(question => this.allQuestions.push(question));
        question[1].map(option => this.allOptions.push(option));
        question[2].map(green => this.greens.push(green));
        this.form._testCreated = question[3][0] ;
        for (let i=0 ; i< this.allQuestions.length ; i++) {
          this.data.push([this.allQuestions[i] , this.allOptions[i],this.greens[i]]); 
        }
        console.log(this.data);
        this.ok = true;
        this.form._candidat = this.user.id ;
      })
  }
  onSubmit() {
      console.log(this.responses);
      this.form.score = this.calculeScore();
      console.log(this.form);
      this.applicatonService.submit_application(this.form).subscribe(err => {
        console.log(err)
      });
      this.testSubmitted = true ;
      setTimeout(()=>{
        this.router.navigate(['candidate/applications']);
      }, 5000);
      

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

  getApplications(): void {
    console.log(this.user.id);
    this.userService.get_applications(this.user.id)
      .subscribe(
        data => {

          this.applications = data.filter(function (application) {
            return (application.offer === this.form._offer);
          });
         
        },
        error => {
          console.log(error);
        });
  }

}
