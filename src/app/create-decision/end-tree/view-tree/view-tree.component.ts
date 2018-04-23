import { Component, OnInit } from '@angular/core';
import { Decision } from 'app/shared/decision';
import { Router } from '@angular/router';
import { DecisionService } from 'app/services/decision.service';
import { CreateDecisionService } from 'app/create-decision/shared/create-decision.service';

@Component({
  selector: 'app-view-tree',
  templateUrl: './view-tree.component.html',
  styleUrls: ['./view-tree.component.css']
})
export class ViewTreeComponent implements OnInit {
  decision : Decision;
  constructor(private router: Router,
    private decisionService: DecisionService,
    private createDecisionService: CreateDecisionService) { }

  ngOnInit() {
    if(localStorage.getItem("currentUser")!=null)
    {
      this.decisionService.getDecision().subscribe(data=>{
        this.decision = data;
      });
    }
    else
    {
      this.decision = this.createDecisionService.getDecision();
    }
    
  }
}
