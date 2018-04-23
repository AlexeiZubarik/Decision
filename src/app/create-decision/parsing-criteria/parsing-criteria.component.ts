import { Component, OnInit } from '@angular/core';
import { CreateDecisionService } from 'app/create-decision/shared/create-decision.service';
import { DecisionService } from 'app/services/decision.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parsing-criteria',
  templateUrl: './parsing-criteria.component.html',
  styleUrls: ['./parsing-criteria.component.css']
})
export class ParsingCriteriaComponent implements OnInit {
  criteriaArray : string[];
  checkBoxArray: boolean [];
  constructor(private decisionService: DecisionService,
              private router: Router,) { }

  ngOnInit() {
    if(localStorage.getItem("currentUser"))
    {
      this.decisionService.getCriteriaArrayName().subscribe(data=>{
        this.criteriaArray = data;
        for(let i in this.criteriaArray)
        {
          this.checkBoxArray = new Array<boolean>(this.criteriaArray.length);
        }
      });
    }
  }

  goNext()
  {
    let timeArray = new Array<string>();
    for(let i in this.criteriaArray)
    {
      if(this.checkBoxArray[i] == true)
      {
        timeArray.push(this.criteriaArray[i]);
      }
    }
    this.decisionService.sendCriteriaArrayName(timeArray).subscribe(data=>{
    this.router.navigate(['addvaluecriterion']);});
  }

}
