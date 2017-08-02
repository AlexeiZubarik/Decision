import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Decision, DecisionArray } from 'app/shared/decision';

import { DecisionService } from 'app/services/decision.service';

@Component({
  selector: 'app-create-alternative',
  templateUrl: './create-alternative.component.html',
  styleUrls: ['./create-alternative.component.css']
})
export class CreateAlternativeComponent implements OnInit {
  title = 'Create Alternative';
  newAlternative: string = '';

  decisionArray: DecisionArray[] = [
    {
      id: 1,
      name: 'Alternative 1',
      finalRate: 1,
      criteriaArray: []
    },
    {
      id: 2,
      name: 'Alternative 2',
      finalRate: 1,
      criteriaArray: []
    },
    {
      id: 3,
      name: 'Alternative 3',
      finalRate: 1,
      criteriaArray: []
    },
  ];

  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }

  delete(alternative: DecisionArray) {}

  goBack(): void {
    this.location.back();
  }

  goNext() {
    this.router.navigate(['createcriterion']);
  }
}
