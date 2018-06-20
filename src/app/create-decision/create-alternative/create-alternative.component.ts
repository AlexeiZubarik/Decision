import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Decision, DecisionArray } from 'app/shared/decision';

import { DecisionService } from 'app/services/decision.service';
import { CreateDecisionService } from '../shared/create-decision.service';
import { EditAlternativComponent } from 'app/create-decision/create-alternative/edit-alternativ/edit-alternativ.component';
import { MatDialog, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-create-alternative',
  templateUrl: './create-alternative.component.html',
  styleUrls: ['./create-alternative.component.css']
})
export class CreateAlternativeComponent implements OnInit {
  title = 'Create Alternative';
  newAlternativeName = '';
  answer : boolean = true;
  decisionArray: DecisionArray[] = [];
  flag : string ;

  constructor(
    private router: Router,
    private location: Location,
    private decisionService: DecisionService,
    private createDecisionService: CreateDecisionService,
    private dialog: MatDialog,
    public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.flag = this.router.url.substring(this.router.url.length-1,this.router.url.length);
    if(localStorage.getItem("currentUser"))
    {
      this.decisionService.getDecision().subscribe(data=>{
        this.decisionArray = data.decisionArray;
      });
    }
    else
    {
      this.decisionArray = this.createDecisionService.getDecisionArray();
    }
 
  }

  delete(alternative: DecisionArray) {
    if(localStorage.getItem("currentUser")!=null)
    {
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
    else{
      this.createDecisionService.deleteAlternativeWithoustAuth(alternative);
    }
  }

  check(name : String)
  {
    for(let alternativ of this.decisionArray)
    {
      if(alternativ.name == name)
      {
        return false;
      }
    }
    return true;
  }

  create() {
    let name = this.newAlternativeName;
    if(this.check(name))
    {
      if(localStorage.getItem("currentUser")!=null)
      {
        this.decisionService.createAlternative(name).subscribe( data => 
          {
            this.decisionArray.push(data);
          });
      }
      else{
        this.createDecisionService.createAlternativeWithoutAuth(this.newAlternativeName);
      }
    }
    else{
      this.openSnackBar("Альтернатива с таким именем уже существует","");
    }
  }

  

  goBack(): void {
    this.location.back();
  }

  goNext() {
    this.answer = true;
    if(this.decisionArray.length>1)
    {
    for(let alternativ of this.decisionArray)
    {
      if(alternativ.url!=null)
      {
        this.answer = false;
      }
    }
    if(this.answer !=  false)
    {
    if(this.flag == '1')
    {
      this.router.navigate(['createcriterion',1]);
    }
    else{
      if( this.flag == '2')
      {
        this.router.navigate(['addvaluecriterion']);
      }
    }
  }
  else{
    this.router.navigate(['parsingcriteria']);
      }
    }
  else{
      this.openSnackBar("Альтернатив должно быть больше 1","");
  }
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
        if(localStorage.getItem("currentUser"))
        {
          this.decisionService.editAlternative(alternative).subscribe( data => {});
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
