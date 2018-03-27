import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Decision, CriteriaArray } from 'app/shared/decision';

import { DecisionService } from 'app/services/decision.service';
import { CreateDecisionService } from '../shared/create-decision.service';
import { MatDialog } from '@angular/material';
import { EditCriteriaComponent } from 'app/create-decision/create-criterion/edit-criteria/edit-criteria.component';

@Component({
  selector: 'app-create-criterion',
  templateUrl: './create-criterion.component.html',
  styleUrls: ['./create-criterion.component.css']
})
export class CreateCriterionComponent implements OnInit {
  title = 'Create Criterion';
  newCriteriaName: string = '';
  criteriaArray: CriteriaArray[];

  constructor(
    private router: Router,
    private location: Location,
    private decisionService: DecisionService,
    private createDecisionService: CreateDecisionService,
    private dialog: MatDialog) {
    this.criteriaArray = [];
  }

  ngOnInit() {
    this.decisionService.getDecision().subscribe(data=>{
      this.criteriaArray = data.decisionArray[0].criteriaArray;
    });
  }

  delete(criteria: CriteriaArray) {
    this.decisionService.deleteCriteria(criteria.id).subscribe(data=>
      {
        if(data==1)
        {
          this.decisionService.getDecision().subscribe(data=>{
            this.criteriaArray = data.decisionArray[0].criteriaArray;
          });
        }
      });
  }

  create() {
    let number: number;
    let name = this.newCriteriaName;
    this.decisionService.createCriteria(name).subscribe( data => 
      {
        let criteria = new CriteriaArray(this.criteriaArray.length ?
          this.criteriaArray[this.criteriaArray.length - 1].id + 1 : 1, name);
        this.criteriaArray.push(criteria);
      });
  }

  goBack(): void {
    this.location.back();
  }

  goNext() {
    this.router.navigate(['instructionComparisonValueComponent']);

    if (this.createDecisionService.titleDecision) {
      this.createDecisionService.createDecision();
    }
  }

  editCriteria(criteria: CriteriaArray): void {
    let dialogRef = this.dialog.open(EditCriteriaComponent, {
      width: '250px',
      data: { name: criteria.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined)
      {
        criteria.name = result;
        
        this.decisionService.editCriteria(criteria).subscribe( data => 
        {
        });
      }
    });
  }

}
