import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Decision, DecisionArray, CriteriaArray } from 'app/shared/decision';

import { DecisionService } from 'app/services/decision.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-decision-detail',
  templateUrl: './decision-detail.component.html',
  styleUrls: ['./decision-detail.component.css']
})
export class DecisionDetailComponent implements OnInit {
  decision : Decision;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private decisionService: DecisionService
  ) {}

  ngOnInit() {
     this.route.paramMap
      .switchMap((params: ParamMap) => this.decisionService.getDecisionById( +params.get('id') ))
      .subscribe( (decision: Decision) => {
      this.decision = decision;
    });
    
  }
}
