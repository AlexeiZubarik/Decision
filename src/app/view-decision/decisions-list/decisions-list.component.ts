import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Decision } from 'app/shared/decision';
import { DecisionService } from 'app/services/decision.service';

@Component({
  selector: 'app-decisions-list',
  templateUrl: './decisions-list.component.html',
  styleUrls: ['./decisions-list.component.css']
})
export class DecisionsListComponent implements OnInit {
  decisions: Decision[];

  constructor(
    private router: Router,
    private decisionService: DecisionService) {
    this.decisions = [];
  }

  ngOnInit() {
    this.decisionService.getDecisions().then(decisions => this.decisions = decisions);
  }

  onSelect(decision: Decision) {
    this.router.navigate(['/viewdecision/', decision.id]);
  }

  delete(decision: Decision) {
    this.decisionService.deleteDecision(decision);
  }

}
