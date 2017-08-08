import { Injectable } from '@angular/core';

import { titleDecision, decisionArray, criteriaArray } from 'app/create-decision/shared/dataCreateDecision';
import { Decision, DecisionArray, CriteriaArray } from 'app/shared/decision';

import { DecisionService } from 'app/services/decision.service';

@Injectable()
export class CreateDecisionService {
  titleDecision: string;
  decision: Decision;
  decisionArray: DecisionArray[] = decisionArray;
  citeriaArray: CriteriaArray[] = criteriaArray;

  constructor(private decisionService: DecisionService) { }

  getDecision(): Decision {
    return this.decision;
  }

  getDecisionArray(): DecisionArray[] {
    return this.decisionArray;
  }

  getCriteriaArray(): CriteriaArray[] {
    return this.citeriaArray;
  }

  createTitleDecision(title: string) {
    this.titleDecision = title;
  }

  createDecision() {
    for (let alternative of decisionArray) {
      alternative.criteriaArray = criteriaArray;
    }

    this.decision = new Decision(this.titleDecision, decisionArray);
    //this.decisionService.createDecision(decision);
  }

  createAlternative(name: string) {
    let alternative = new DecisionArray(name);

    this.decisionArray.push(alternative);
  }

  createCriteria(name: string) {
    let criteria = new CriteriaArray(name);

    this.citeriaArray.push(criteria);
  }

  deleteAlternative(alternative: DecisionArray) {
    let index = this.decisionArray.indexOf(alternative);

    if (index > -1) {
      this.decisionArray.splice(index, 1);
    }
  }

  deleteCriteria(criteria: CriteriaArray) {
    let index = this.citeriaArray.indexOf(criteria);

    if (index > -1) {
      this.citeriaArray.splice(index, 1);
    }
  }
}
