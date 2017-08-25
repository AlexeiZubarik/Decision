import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Decision, DecisionArray, CriteriaArray } from 'app/shared/decision';

import { DecisionService } from 'app/services/decision.service';
import { CreateDecisionService } from '../shared/create-decision.service';

import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-value-criterion',
  templateUrl: './add-value-criterion.component.html',
  styleUrls: ['./add-value-criterion.component.css']
})
export class AddValueCriterionComponent implements OnInit {
  title = 'Add Value Criterion';
  decision: Decision;
  decisionArray: DecisionArray[];
  criteriaArray: CriteriaArray[];

  constructor(
    private router: Router,
    private location: Location,
    private createDecisionService: CreateDecisionService,
    private decisionService: DecisionService,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.decision = this.createDecisionService.getDecision();
    this.decisionArray = this.decision.decisionArray;
    this.criteriaArray = this.decisionArray[0].criteriaArray;
  }

  goBack(): void {
    this.location.back();
  }

  goNext() {
    this.router.navigate(['']);
  }

  goCreateAlternative() {
    this.router.navigate(['createalternative']);
  }

  goCreateCriterion() {
    this.router.navigate(['createcriterion']);
  }

  saveDecision() {
    if (this.createDecisionService.titleDecision) {
      this.openSnackBar(this.decision.title, 'Save')
      this.decisionService.createDecision(this.decision);
        //.subscribe(decision => this.decisions.push(decision));
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
