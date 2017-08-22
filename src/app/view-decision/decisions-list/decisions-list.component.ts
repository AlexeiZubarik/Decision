import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk';
import { MdSort } from '@angular/material';

import { Decision } from 'app/shared/decision';
import { DecisionService } from 'app/services/decision.service';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-decisions-list',
  templateUrl: './decisions-list.component.html',
  styleUrls: ['./decisions-list.component.css']
})
export class DecisionsListComponent implements OnInit {
  displayedColumns = ['decisionId', 'decisionName', 'createData', 'alternatives', 'criterion'];
  decisions: Decision[];
  dataSource: DecisionDataSource | null;

  @ViewChild(MdSort) sort: MdSort;
  @ViewChild('filter') filter: ElementRef;

  constructor(
    private router: Router,
    private decisionService: DecisionService) {
    this.decisions = [];
  }

  ngOnInit() {
    this.decisionService.getDecisions().subscribe(decisions => this.decisions = decisions);
    this.dataSource = new DecisionDataSource(this.decisionService);
  }

  onSelect(decision: Decision) {
    this.router.navigate(['/viewdecision/', decision.id]);
  }

  delete(decision: Decision) {
    this.decisionService.deleteDecision(decision)
      .subscribe(response => {
        let index = this.decisions.indexOf(decision);
        if (index > -1) { this.decisions.splice(index, 1); }
       });
  }


}

export class DecisionDataSource extends DataSource<any> {
  constructor(private decisionService: DecisionService) {
    super();
  }

  connect(): Observable<Decision[]> {
    return this.decisionService.getDecisions();
  }

  disconnect() {}
}

