import { Component, OnInit } from '@angular/core';

import { Decision } from '../../shared/decision';

import { DecisionService } from '../../services/decision.service';
import { CreateDecisionService } from '../shared/create-decision.service';

import { MatSnackBar } from '@angular/material';

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
    private createDecisionService: CreateDecisionService,
    public snackBar: MatSnackBar) {
    this.decisions = [];
  }

  ngOnInit() {
    this.decisionService.getDecisions().subscribe(decisions => this.decisions = decisions);
  }

  create() {
    this.openSnackBar(this.newDecisionTitle, 'Create');
    this.createDecisionService.createTitleDecision(this.newDecisionTitle);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
