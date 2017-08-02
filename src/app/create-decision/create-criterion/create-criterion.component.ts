import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Decision, CriteriaArray } from 'app/shared/decision';

import { DecisionService } from 'app/services/decision.service';

@Component({
  selector: 'app-create-criterion',
  templateUrl: './create-criterion.component.html',
  styleUrls: ['./create-criterion.component.css']
})
export class CreateCriterionComponent implements OnInit {
  title = 'Create Criterion';
  newCriterion: string = '';

  criteriaArray: CriteriaArray[] = [
    {
      id: 1,
      name: 'Criteria 1',
      rate: 1,
      value: '',
      valueRate: 1,
      criterionPriority: 1,
      valuePriority: 1
    },
    {
      id: 2,
      name: 'Criteria 2',
      rate: 1,
      value: '',
      valueRate: 1,
      criterionPriority: 1,
      valuePriority: 1
    },
  ];

  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }

  delete(criteria: CriteriaArray) {}

  goBack(): void {
    this.location.back();
  }

  goNext() {
    this.router.navigate(['']);
  }

}
