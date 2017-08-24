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
    this.dataSource = new DecisionDataSource(new DecisionData(this.decisionService.getDecisions()));
     Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
    });
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
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private _decisionData: DecisionData) {
    super();
  }

  connect(): Observable<Decision[]> {
    const displayDataChanges = [
      this._decisionData.dataChange,
      this._filterChange,
    ];

    //return this._decisionData.dataChange;
    return Observable.merge(...displayDataChanges).map(() => {
      return this._decisionData.dataChange.value.slice().filter((item: Decision) => {
        let searchStr = (item.title + item.id).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      });
    });
  }

  disconnect() {}
}

export class DecisionData {
  dataChange: BehaviorSubject<Decision[]> = new BehaviorSubject<Decision[]>([]);
  get data(): Decision[] { return this.dataChange.value; }

  constructor(private _observe) {
    _observe.subscribe(decisions => {
      for (let decision of decisions) {
        const copiedData = this.data.slice();
        copiedData.push(decision);
        this.dataChange.next(copiedData);
      }
    });
  }
}
