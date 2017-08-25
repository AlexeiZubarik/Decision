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
  @Input() decision: Decision;
  decisionArray: DecisionArray[];
  criteriaArray: CriteriaArray[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private decisionService: DecisionService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        // tslint:disable-next-line:radix
        this.decisionService.getDecision( +params.get('id')) )
      .subscribe( decision => {
        this.decision = decision;
        this.decisionArray = this.decision.decisionArray;
        this.criteriaArray = this.decisionArray[0].criteriaArray;
      });
  }
}
