import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Decision } from '../shared/decision';

import { DecisionService } from '../services/decision.service';

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
    private decisionService: DecisionService) { 
    this.decisions = [];
  }

  goBack(): void {
    this.location.back();
  }

  goNext() {
    this.router.navigate(['createalternative']);
  }
  
  ngOnInit() {
    this.decisionService.getDecisions().then(decisions => this.decisions = decisions)
  }

  create() {
    this.decisionService.createDecision(this.newDecisionTitle);
  } 

}
