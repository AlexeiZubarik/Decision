import { Component, OnInit } from '@angular/core';

import { Decision } from '../../shared/decision';

import { DecisionService } from '../../services/decision.service';
import { CreateDecisionService } from '../shared/create-decision.service';

@Component({
  selector: 'app-decision-form',
  templateUrl: './decision-form.component.html',
  styleUrls: ['./decision-form.component.css']
})
export class DecisionFormComponent implements OnInit {
  newDecisionTitle = '';
  decisions: Decision[];

  constructor(
    private decisionService: DecisionService,
    private createDecisionService: CreateDecisionService) {
    this.decisions = [];
  }

  ngOnInit() {
    this.decisionService.getDecisions().then(decisions => this.decisions = decisions);
  }

  create() {
    this.createDecisionService.createTitleDecision(this.newDecisionTitle);
  }

}
