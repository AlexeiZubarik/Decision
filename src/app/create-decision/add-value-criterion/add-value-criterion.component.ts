import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Location } from '@angular/common';

import { Decision, DecisionArray, CriteriaArray } from 'app/shared/decision';

import { DecisionService } from 'app/services/decision.service';
import { CreateDecisionService } from '../shared/create-decision.service';

import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { Browser } from 'protractor/node_modules/@types/selenium-webdriver';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-add-value-criterion',
  templateUrl: './add-value-criterion.component.html',
  styleUrls: ['./add-value-criterion.component.css']
})
export class AddValueCriterionComponent implements OnInit {
  title = 'Add Value Criterion';
  panelOpenState: boolean = false;
  answer: boolean = true;
  decision: Decision;
  size : number = 0;
  decisionArray: DecisionArray[];
  criteriaArray: CriteriaArray[];
  minRate: boolean[] = [];
  currentLocation;
  constructor(
    private router: Router,
    private location: Location,
    private createDecisionService: CreateDecisionService,
    private decisionService: DecisionService,
    private snackBar: MatSnackBar,
    private http:Http
  ) 
    { 
  }

  ngOnInit() {
      //this.currentLocation = this.location.path(); 
      if(localStorage.getItem("currentUser")!=null)
      { 
        this.decisionService.getDecision().subscribe(data=>{
        this.decision = data;
        this.decisionArray = this.decision.decisionArray;
        for( let i in this.decision.decisionArray[0].criteriaArray )
        {
            this.minRate[i] = false;
        }
        });
      }
      else{
        this.decision = this.createDecisionService.createDecisionWithoutAuth();
        this.decisionArray = this.decision.decisionArray;
        for( let i in this.decision.decisionArray[0].criteriaArray )
      {
            this.minRate[i] = false;
      }
      }
      
  }

  goBack(): void {
    //this.location.back();
  }

  goNext() {
    if(localStorage.getItem("currentUser")==null)
    {
      this.saveDecision();
      this.decisionService.getDecisionWithoutAuth(this.decision).subscribe(data=>
      {
        this.decision = data;
        this.createDecisionService.setDecision(this.decision);
        this.decisionService.setDecisionWithoutAuth(this.decision).subscribe(data=>{
          if(data == true){
            this.router.navigate(['pairedComparisomComponent']);
          }
          else{
            this.router.navigate(['pairedComparisonCriteriaComponent']);
          }
         });
      })
    }
    else{
      if(this.answer == true){
        this.router.navigate(['pairedComparisomComponent']);
      }
      else{
        this.router.navigate(['pairedComparisonCriteriaComponent']);
      }
    }
    
    
  }

  goCreateAlternative() {
    this.router.navigate(['createalternative',2]);
  }

  goCreateCriterion() {
    this.router.navigate(['createcriterion',2]);
  }

  saveDecision() {
    for(let i of this.decision.decisionArray)
    {
      for(let j of i.criteriaArray)
      {
          j.valueRate = parseInt(j.value);
      }
    }
    for( let i in this.minRate )
    {
        if(this.minRate[i] == true)
        {
          for(let alternative of this.decision.decisionArray)
          {
            alternative.criteriaArray[i].valueRate = 1/alternative.criteriaArray[i].valueRate;
          }
        }
    }
    if(localStorage.getItem("currentUser")!=null){
      this.decisionService.setDecision(this.decision).subscribe(data=>{
       this.answer = true;
      }); 
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

}
