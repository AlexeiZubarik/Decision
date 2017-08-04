import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Decision, DecisionArray } from 'app/shared/decision';

import { DecisionService } from 'app/services/decision.service';
import { CreateDecisionService } from '../shared/create-decision.service';

@Component({
  selector: 'app-create-alternative',
  templateUrl: './create-alternative.component.html',
  styleUrls: ['./create-alternative.component.css']
})
export class CreateAlternativeComponent implements OnInit {
  title = 'Create Alternative';
  newAlternativeName = '';
  decisionArray: DecisionArray[];

  constructor(
    private router: Router,
    private location: Location,
    private createDecisionService: CreateDecisionService) {
    this.decisionArray = [];
  }

  ngOnInit() {
    this.decisionArray = this.createDecisionService.getDecisionArray();
  }

  delete(alternative: DecisionArray) {
    this.createDecisionService.deleteAlternative(alternative);
  }

  create() {
    this.createDecisionService.createAlternative(this.newAlternativeName);
  }

  goBack(): void {
    this.location.back();
  }

  goNext() {
    this.router.navigate(['createcriterion']);
  }
}
