import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Decision } from '../shared/decision';

import { DecisionService } from '../services/decision.service';
import { CreateDecisionService } from './shared/create-decision.service';

@Component({
  selector: 'app-create-decision',
  templateUrl: './create-decision.component.html',
  styleUrls: ['./create-decision.component.css']
})
export class CreateDecisionComponent implements OnInit {
  title = 'Create Decision';
  decisions: Decision[];
  newDecisionTitle: string = '';

  constructor(
    private router: Router,
    private location: Location,
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

  goBack(): void {
    this.location.back();
    this.createDecisionService.titleDecision = null;
  }

  goNext() {
    this.router.navigate(['createalternative']);
  }

}
