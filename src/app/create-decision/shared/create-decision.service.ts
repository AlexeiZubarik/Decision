import { Injectable } from '@angular/core';

import { titleDecision, decisionArray, criteriaArray } from 'app/create-decision/shared/dataCreateDecision';
import { Decision, DecisionArray, CriteriaArray } from 'app/shared/decision';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthHttp, AuthConfigConsts } from 'angular2-jwt';
import { CoreService } from 'app/services/core.service';
import { Headers } from '@angular/http/src/headers';
import { DecisionService } from 'app/services/decision.service';

@Injectable()
export class CreateDecisionService  extends CoreService {
  titleDecision: string;
  decision: Decision;
  dateCreate: Date;
  note: string;
  decisionArray: DecisionArray[] = decisionArray;
  criteriaArray: CriteriaArray[] = criteriaArray;

  constructor(private http: Http,
    private authHttp: AuthHttp,
    private decisionService: DecisionService) { super() }

  
  

  getCriteriaArray(): CriteriaArray[] {
    return this.criteriaArray;
  }

  createTitleNoteDecision(title: string, note: string) {
    this.titleDecision = title;
    this.note = note;
  }

  createDecision() {
    var number  = 1;
    let compareCriteria : number [][] = null;
    for (let alternative of decisionArray) {
      alternative.criteriaArray = [];
         this.setCriteriaArray(alternative.criteriaArray,number);
         number = number + alternative.criteriaArray.length;
    }
    //this.decision = new Decision(/*1,"sample string 2",this.titleDecision, new Date(), this.note decisionArray*/);
  }

  setCriteriaArray(criteriaArrays:any[], id: number)
  {
    for(let criteria of criteriaArray)
    {
      let criterias = new CriteriaArray(id, criteria.name,criteria.rate,criteria.value,
      criteria.valueRate,criteria.criterionPriority,criteria.criterionPriority);
      criteriaArrays.push(criterias);
      id++; 
    }
    
  }

  createAlternative(name: string) {
    let number: number;
    this.decisionService.createAlternative(name).subscribe( data => 
      {
        number = data;
        let alternative = new DecisionArray( number , name);
        this.decisionArray.push(alternative);
      });
  }

  createCriteria(name: string) {
    let number: number;
    this.decisionService.createCriteria(name).subscribe( data => 
      {
        let criteria = new CriteriaArray(this.criteriaArray.length ?
          this.criteriaArray[this.criteriaArray.length - 1].id + 1 : 1, name);
        this.criteriaArray.push(criteria);
      });
  }

  deleteAlternative(alternative: DecisionArray) {
    this.decisionService.deleteAlternative( alternative.id).subscribe(data=>
    {
      
      let index = this.decisionArray.indexOf(alternative);
      if (index > -1) {
        this.decisionArray.splice(index, 1);
      }
      else
      {
        this.decisionService.getDecision().subscribe(data=>{
          this.decisionArray = data.decisionArray;
        });
      }
    })
    
  }

  deleteCriteria(criteria: CriteriaArray) {
    let index = this.criteriaArray.indexOf(criteria);

    if (index > -1) {
      this.criteriaArray.splice(index, 1);
    }
  }

  deleteData() {
    decisionArray.splice(0, decisionArray.length);
    criteriaArray.splice(0, criteriaArray.length);
  }
}
