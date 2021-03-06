import { Component, OnInit, Input } from '@angular/core';
import { Decision, DecisionArray, CriteriaArray } from 'app/shared/decision';
import { Router } from '@angular/router';
import { CreateDecisionService } from 'app/create-decision/shared/create-decision.service';
import { DecisionService } from 'app/services/decision.service';
import { MatSnackBar } from '@angular/material';
import { DecisionWithCompareArray } from 'app/shared/DecisionWithCompareArray';

@Component({
  selector: 'app-paired-comparisom',
  templateUrl: './paired-comparisom.component.html',
  styleUrls: ['./paired-comparisom.component.css']
})
export class PairedComparisomComponent implements OnInit {
  title="Попарное сравнение критериев"
  decisionArray: DecisionArray[];
  panelOpenState: boolean = false;
  decisionWithCompareArray: DecisionWithCompareArray;
  selectedValue: number = 1;
  decision: Decision;
  criteriaArray: CriteriaArray[];
  counter: number = 0;
  firstCriteria : string;
  secondCriteria : string;
  line:number = 0;
  column:number = 1;
  choose:boolean = true;
  object : Object[] = new Array<Object>();
  compareCriteria : number[][];
  timeArray : any[] = new Array();
  compareArray : number = 0;
  flag: boolean = true;
  end : boolean = false;
    values = [
      {value: 1, viewValue: 'равновесное значение (одинаково важны при выборе)'},
      {value: 2, viewValue: 'между равнозначностью и умеренным превосходством'},
      {value: 3, viewValue: 'умеренное превосходство'},
      {value: 4, viewValue: 'между умеренным и сильным превосходством'},
      {value: 5, viewValue: 'сильное превосходство'},
      {value: 6, viewValue: 'между сильным и очень сильным превосходством'},
      {value: 7, viewValue: 'очень сильное превосходство'},
      {value: 8, viewValue: 'между очень сильным и высшим превосходством'},
      {value: 9, viewValue: 'высшее превосходство'}
    ];
  constructor(private router: Router,
    private createDecisionService: CreateDecisionService,
    private decisionService: DecisionService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.selectedValue = 1;
    this.end = false;
    if(localStorage.getItem("currentUser")!=null)
    {
      this.decisionService.getDecision().subscribe(data=>{
      this.decision = data;
      this.decisionArray = this.decision.decisionArray;
      this.criteriaArray = this.decisionArray[0].criteriaArray;
      this.counter = this.doFact(this.criteriaArray.length-1);
      this.initCriteriaValueArray();
      this.firstCriteria = this.criteriaArray[0].name;
      this.secondCriteria = this.criteriaArray[1].name;
      });
    }
    else{
      this.decision = this.createDecisionService.getDecision();
      this.decisionArray = this.decision.decisionArray;
      this.criteriaArray = this.decisionArray[0].criteriaArray;
      this.counter = this.doFact(this.criteriaArray.length-1);
      this.firstCriteria = this.criteriaArray[0].name;
      this.secondCriteria = this.criteriaArray[1].name;
      this.initCriteriaValueArray();
    }
   
  }

  initCriteriaValueArray()
  {
    this.compareCriteria = new Array(this.criteriaArray.length);
    for(var criteria = 0 ; criteria < this.criteriaArray.length; criteria++)
    {
        this.compareCriteria[criteria] = new Array(this.criteriaArray.length);
        this.compareCriteria[criteria][criteria] = 1;
    }
    for(var criteria = 0 ; criteria < this.criteriaArray.length; criteria++)
    {
        for(var doublecriteria = 0 ; doublecriteria < this.criteriaArray.length; doublecriteria++)
      {
        if(this.criteriaArray[criteria] == this.criteriaArray[doublecriteria])
        {
          this.compareCriteria[criteria][doublecriteria] = 1;
          this.compareCriteria[doublecriteria][criteria] = 1;
        }
      }
    }
  }

  private doFact(counter: number ): number {
    return counter <= 1 ? 1 : counter + this.doFact(counter - 1);
  }

  saveChoose(){
    this.changeCounter();
    if(this.line == 1 && this.column == 0)
    {
      for(var criteria = 0 ; criteria < this.criteriaArray.length; criteria++)
      {
        this.compareCriteria[criteria] = new Array(this.criteriaArray.length);
        this.compareCriteria[criteria][criteria] = 1;
      }
      this.saveCompare();
      if(this.criteriaArray.length>2)
      {
        this.line = this.line + 1;
        this.secondCriteria = this.criteriaArray[this.line].name;
      }
      else{
          this.column = this.column +1;
      }
    }
    else
    {
      if(this.line < this.criteriaArray.length-1)
      {
        this.saveCompare(); 
        this.line = this.line +1;
        this.firstCriteria = this.criteriaArray[this.column].name;
        this.secondCriteria = this.criteriaArray[this.line].name;
      }
      else
      {
        if(this.column < (this.criteriaArray.length-1))
        {
          this.saveCompare();
          this.column = this.column + 1;
          if(this.column < (this.criteriaArray.length-1))
          {
            this.line = this.column + 1;
            this.firstCriteria = this.criteriaArray[this.column].name;
            this.secondCriteria = this.criteriaArray[this.line].name;
          }
        }
      }
    }     
  }

  saveAnswerInArray()
  {
    this.counter-=1;
    if(this.counter ==0)
    {
      this.saveCompare();
      this.saveOnServer();
    }
    else
    {
      this.saveCompare();
      if(this.column == this.criteriaArray.length-1)
      {
        this.line +=1;
        this.column = this.line+1;
      }
      else{
        this.column +=1;
      }
      this.firstCriteria = this.criteriaArray[this.line].name;
      this.secondCriteria = this.criteriaArray[this.column].name;
      this.choose  = true;
    }
  }

  saveOnServer()
  {
    if(localStorage.getItem("currentUser")!=null){
      this.decisionService.sendPairedCompareCriteria(this.compareCriteria).subscribe(data=>{
        this.snackBar.open("Все критерии были попарно сравнены", "action", {
          duration: 2000
        });
        this.end = true;
      });
    }
    else{
      this.decisionWithCompareArray = new DecisionWithCompareArray(this.decision,this.compareCriteria);
      this.decisionService.sendPairedCompareCriteriaWithoutAuth(this.decisionWithCompareArray).subscribe(data=>{
        this.createDecisionService.setDecision(data);
        this.snackBar.open("Все критерии были попарно сравнены", "action", {
          duration: 2000
        });
        this.end = true;
      }
    );
    }
  }

  goNext()
  {
    this.router.navigate(['endTree']);
  }

  saveCompare()
  {
    if(this.choose==true)
    {
      this.compareCriteria[this.column][this.line] = this.selectedValue;
      this.compareCriteria[this.line][this.column] = 1/this.selectedValue;
    }
    else
    {
      this.compareCriteria[this.column][this.line] = 1/this.selectedValue;
      this.compareCriteria[this.line][this.column] = this.selectedValue;
    }
  }

  changeCounter()
  {
    if(this.counter!=0)
    {
      this.counter = this.counter - 1;
    }
  }

  swap(){
    if(this.choose==true)
    {
      this.choose = false;
    }
    else
    {
      this.choose = true;
    }
  }
}
