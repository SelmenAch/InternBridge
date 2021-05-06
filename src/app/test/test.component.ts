import { Component, OnInit } from '@angular/core';
import { TestService } from '../_services/test.service' ;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  ok = false ;
  form = {} ;
  data = [];
  questions = [] ;
  options = [] ;
  allQuestions = [] ;
  allOptions = [] ;
  constructor(private testService : TestService) { }
  ngOnInit(): void {
    this.testService.getTest("php").subscribe(question => {
      this.questions.push(question[0]);
      this.questions.map(question => question.map(item => item.map(k => this.allQuestions.push(k))));
      this.options.push(question[1]);
      this.options.map(question => question.map(item => item.map(k => this.allOptions.push(k))));
      for (let i=0 ; i< this.allQuestions.length ; i++) {
        this.data.push([this.allQuestions[i] , this.allOptions[i]]) 
      }
      this.ok = true;
    })
  }
  onSubmit() {
      
  }

}
