import { Injectable } from '@angular/core';

import { titleDecision, decisionArray, criteriaArray } from 'app/create-decision/shared/dataCreateDecision';
import { Decision, DecisionArray, CriteriaArray } from 'app/shared/decision';

@Injectable()
export class CreateDecisionService {
  titleDecision: string;
  decision: Decision;
  dateCreate: Date;
  note: string;
  decisionArray: DecisionArray[] = decisionArray;
  criteriaArray: CriteriaArray[] = criteriaArray;

  constructor() { }

  getDecision(): Decision {
    return this.decision;
  }

  getDecisionArray(): DecisionArray[] {
    return this.decisionArray;
  }

  getCriteriaArray(): CriteriaArray[] {
    return this.criteriaArray;
  }

  createTitleDecision(title: string) {
    this.titleDecision = title;
  }

  createDecision() {
    for (let alternative of decisionArray) {
      alternative.criteriaArray = criteriaArray;
    }

    this.decision = new Decision(this.titleDecision, new Date(), 'test, testgdd dfg djfgert ', decisionArray);
  }

  createAlternative(name: string) {
    let alternative = new DecisionArray(this.decisionArray.length ?
      this.decisionArray[this.decisionArray.length - 1].id + 1 : 1, name);

    this.decisionArray.push(alternative);
  }

  createCriteria(name: string) {
    let criteria = new CriteriaArray(this.criteriaArray.length ?
      this.criteriaArray[this.criteriaArray.length - 1].id + 1 : 1, name);

    this.criteriaArray.push(criteria);
  }

  deleteAlternative(alternative: DecisionArray) {
    let index = this.decisionArray.indexOf(alternative);

    if (index > -1) {
      this.decisionArray.splice(index, 1);
    }
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
