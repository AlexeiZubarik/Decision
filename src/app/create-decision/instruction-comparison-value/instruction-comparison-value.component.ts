import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DecisionService } from 'app/services/decision.service';
import { CreateDecisionService } from 'app/create-decision/shared/create-decision.service';
import { CriteriaArray } from 'app/shared/decision';

@Component({
  selector: 'app-instruction-comparison-value',
  templateUrl: './instruction-comparison-value.component.html',
  styleUrls: ['./instruction-comparison-value.component.css']
})
export class InstructionComparisonValueComponent implements OnInit {
  title = 'Instruction';
  flag: string;
  constructor(
    private router: Router,) {
  }
  ngOnInit() {
    this.flag = this.router.url.substring(this.router.url.length-1,this.router.url.length);
  }
  
  goNext() {
    if(this.flag=="1")
    {
    this.router.navigate(['pairedComparisomComponent']);
    }
    else{
      if(this.flag == "2")
      {
        this.router.navigate(['pairedComparisonCriteriaComponent']);
      }
    }
  }
}
