import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ParamMap, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Decision, CriteriaArray } from 'app/shared/decision';

import { DecisionService } from 'app/services/decision.service';
import { CreateDecisionService } from '../shared/create-decision.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { EditCriteriaComponent } from 'app/create-decision/create-criterion/edit-criteria/edit-criteria.component';
import { Browser } from 'protractor/node_modules/@types/selenium-webdriver';

@Component({
  selector: 'app-create-criterion',
  templateUrl: './create-criterion.component.html',
  styleUrls: ['./create-criterion.component.css']
})
export class CreateCriterionComponent implements OnInit {
  title = 'Create Criterion';
  flag : string ;
  newCriteriaName: string = '';
  criteriaArray: CriteriaArray[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private decisionService: DecisionService,
    private createDecisionService: CreateDecisionService,
    private dialog: MatDialog,
    public snackBar: MatSnackBar) {
    this.criteriaArray = [];
  }

  ngOnInit() {
    this.flag = this.router.url.substring(this.router.url.length-1,this.router.url.length);
    if(localStorage.getItem("currentUser")!=null)
    {
      this.decisionService.getDecision().subscribe(data=>{
        this.criteriaArray = data.decisionArray[0].criteriaArray;
      });
    }else{
      this.criteriaArray = this.createDecisionService.getCriteriaArray();
    }
  }
  
  
  delete(criteria: CriteriaArray) {
    if(localStorage.getItem("currentUser")!=null)
    {
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
    else{
      this.createDecisionService.deleteCriteriaWithoutAuth(criteria);
    }
  }

  check(name : String)
  {
    for(let criteria of this.criteriaArray)
    {
      if(criteria.name == name)
      {
        return false;
      }
    }
    return true;
  }

  create() {
    let number: number;
    let name = this.newCriteriaName;
    if(this.check(name))
    {
      if(localStorage.getItem("currentUser")!=null)
      {
        this.decisionService.createCriteria(name).subscribe( data => 
          {
            let criteria = new CriteriaArray(this.criteriaArray.length ?
              this.criteriaArray[this.criteriaArray.length - 1].id + 1 : 1, name);
            this.criteriaArray.push(criteria);
          });
      }
      else{
        this.createDecisionService.createCriteriaWithoutAuth(this.newCriteriaName);
      }
    } 
    else{
      this.openSnackBar("Критерий с таким именем уже существует","");
    }
  }

  goBack(): void {
    this.location.back();
  }

  goNext() {
    if(this.criteriaArray.length>1)
    {
    if(this.flag == '1')
    {
      this.router.navigate(['addvaluecriterion']);
    }
    else{
      if( this.flag == '2')
      {
        this.router.navigate(['addvaluecriterion']);
      }
    }
    }
      else
    {
      this.openSnackBar("Критериев должно быть больше 1","");
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
        if(localStorage.getItem("currentUser")!=null)
          {
          this.decisionService.editCriteria(criteria).subscribe( data => 
          {});
        }
      }
    });
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
