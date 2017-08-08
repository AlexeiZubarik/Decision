import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Decision, CriteriaArray } from 'app/shared/decision';

import { DecisionService } from 'app/services/decision.service';
import { CreateDecisionService } from '../shared/create-decision.service';

@Component({
  selector: 'app-create-criterion',
  templateUrl: './create-criterion.component.html',
  styleUrls: ['./create-criterion.component.css']
})
export class CreateCriterionComponent implements OnInit {
  title = 'Create Criterion';
  newCriteriaName: string = '';
  criteriaArray: CriteriaArray[];

  constructor(
    private router: Router,
    private location: Location,
    private decisionService: DecisionService,
    private createDecisionService: CreateDecisionService) {
    this.criteriaArray = [];
  }

  ngOnInit() {
    this.criteriaArray = this.createDecisionService.getCriteriaArray();
  }

  delete(criteria: CriteriaArray) {
    this.createDecisionService.deleteCriteria(criteria);
  }

  create() {
    this.createDecisionService.createCriteria(this.newCriteriaName);
  }

  goBack(): void {
    this.location.back();
  }

  goNext() {
    this.router.navigate(['addvaluecriterion']);

    if (this.createDecisionService.titleDecision) {
      this.createDecisionService.createDecision();
    }
  }
}
