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
  decisions: Decision[];

  constructor(
    private location: Location,
    private router: Router,
    private decisionService: DecisionService,
    private createDecisionService: CreateDecisionService,
    public snackBar: MatSnackBar) {
    this.decisions = [];
  }

  ngOnInit() {
    this.decisionService.getDecisions().subscribe(decisions => this.decisions = decisions);
  }

  goNext() {
    this.openSnackBar(this.newDecisionTitle, 'Create');
    this.createDecisionService.createTitleNoteDecision(this.newDecisionTitle,this.note);
    this.router.navigate(['createalternative']);
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
