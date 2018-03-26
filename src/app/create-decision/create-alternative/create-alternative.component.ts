import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Decision, DecisionArray } from 'app/shared/decision';

import { DecisionService } from 'app/services/decision.service';
import { CreateDecisionService } from '../shared/create-decision.service';
import { EditAlternativComponent } from 'app/create-decision/create-alternative/edit-alternativ/edit-alternativ.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-create-alternative',
  templateUrl: './create-alternative.component.html',
  styleUrls: ['./create-alternative.component.css']
})
export class CreateAlternativeComponent implements OnInit {
  title = 'Create Alternative';
  newAlternativeName = '';
  decisionArray: DecisionArray[];

  constructor(
    private router: Router,
    private location: Location,
    private decisionService: DecisionService,
    private createDecisionService: CreateDecisionService,
    private dialog: MatDialog) {
    this.decisionArray = [];
  }

  ngOnInit() {
    this.decisionService.getDecision().subscribe(data=>{
      this.decisionArray = data.decisionArray;
    });
  }

  delete(alternative: DecisionArray) {
    this.decisionService.deleteAlternative( alternative.id).subscribe(data=>
      {
        if(data==1)
        {
          this.decisionService.getDecision().subscribe(data=>{
            this.decisionArray = data.decisionArray;
          });
        }
      });
  }

  create() {
    let name = this.newAlternativeName;
    this.decisionService.createAlternative(name).subscribe( data => 
      {
        let number: number;
        number = data;
        let alternative = new DecisionArray( number , name);
        this.decisionArray.push(alternative);
      });
  }

  goBack(): void {
    this.location.back();
  }

  goNext() {
    this.router.navigate(['createcriterion']);
  }

  editAlternative(alternative: DecisionArray): void {
    let dialogRef = this.dialog.open(EditAlternativComponent, {
      width: '250px',
      data: { name: alternative.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined)
      {
        alternative.name = result;
        
        this.decisionService.editAlternative(alternative).subscribe( data => 
        {
        });
      }
    });
  }

}
