import { Component, OnInit } from '@angular/core';
import { Decision } from '../../shared/decision';
import { Location } from '@angular/common';
import { DecisionService } from '../../services/decision.service';
import { CreateDecisionService } from '../shared/create-decision.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decision-form',
  templateUrl: './decision-form.component.html',
  styleUrls: ['./decision-form.component.css']
})
export class DecisionFormComponent implements OnInit {
  newDecisionTitle = '';
  note = '';
  flag : string ;
  decision: Decision = null;

  constructor(
    private location: Location,
    private router: Router,
    private decisionService: DecisionService,
    private createDecisionService: CreateDecisionService,
    public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.flag = this.router.url.substring(this.router.url.length-1,this.router.url.length);
    this.createDecisionService.cleanCritreiaArray();
    this.createDecisionService.cleanDecisionArray();
    if(this.flag=="0")
    {
    localStorage.removeItem("idDecision");
    }
    else{
      if(this.flag=="1")
      {
        this.decisionService.getDecision().subscribe(data=>{
          this.newDecisionTitle = data.name;
          this.note = data.note;
        });
      }
    }
  }

  goNextWithoutSave()
  {
    this.router.navigate(['createalternative',1]); 
  }

  goNext() {
    if(localStorage.getItem("currentUser")!=null)
    {
    this.decisionService.saveDecision(this.newDecisionTitle,this.note).subscribe( data => 
      {
        localStorage.setItem('idDecision', JSON.stringify(data));
        this.openSnackBar(this.newDecisionTitle, 'Create');
        this.createDecisionService.createTitleNoteDecision(this.newDecisionTitle,this.note);
        this.router.navigate(['createalternative',1]); 
      });
    } 
    else{
    this.openSnackBar(this.newDecisionTitle, 'Create');
    this.createDecisionService.createTitleNoteDecision(this.newDecisionTitle,this.note);
    this.router.navigate(['createalternative',1]); 
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  goBack(): void {
    this.location.back();
    this.createDecisionService.titleDecision = null;
  }

}
