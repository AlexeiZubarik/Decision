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
  alternativeName : String = "";
  number : number = 0;
  constructor(private router: Router,
    private decisionService: DecisionService,
    private createDecisionService: CreateDecisionService) { }

  ngOnInit() {
    if(localStorage.getItem("currentUser")!=null)
    {
      this.decisionService.getDecision().subscribe(data=>{
        this.decision = data;
        this.getTitle();
      });
    }
    else
    {
      this.decision = this.createDecisionService.getDecision();
      this.getTitle();
    }
    
   
  }

  getTitle()
  {
    for(let alternativ of this.decision.decisionArray)
    {
      if(alternativ.finalRate > this.number)
      {
        this.number = alternativ.finalRate;
        this.alternativeName = alternativ.name;
      }
    }
  }

  changeTree()
  {
    this.router.navigate(['createdecision',1]);
  }

  goNext()
  {
    this.router.navigate(['']);
    localStorage.removeItem("idDecision");
  }
  deleteTree()
  {
    this.decisionService.removeDecision().subscribe(data=>
    {
      localStorage.removeItem("idDecision");
      this.router.navigate(['']);
    });
  }
}
