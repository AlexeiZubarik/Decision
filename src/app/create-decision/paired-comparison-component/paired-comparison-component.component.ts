import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DecisionService } from 'app/services/decision.service';
import { Decision } from 'app/shared/decision';
import { CreateDecisionService } from 'app/create-decision/shared/create-decision.service';
import { DecisionWithCompareArray } from 'app/shared/DecisionWithCompareArray';

@Component({
  selector: 'app-paired-comparison-component',
  templateUrl: './paired-comparison-component.component.html',
  styleUrls: ['./paired-comparison-component.component.css']
})
export class PairedComparisonComponentComponent implements OnInit {
  snackBar: any;
  answer: boolean = true;
  title="Попарное сравнение знайчений"
  array : string[];
  arrays : string[];
  counter: number = 0;
  firstCriteria : string;
  secondCriteria : string;
  pr: number =1;
  decision: Decision;
  choose:boolean = true;
  selectedValue: number;
  decisionWithCompareArray: DecisionWithCompareArray;
  compareCriteria : number[][];
  shortComapreCritria:any[];
  timeArray : any[];
  compareArray : number = 0;
  flag: boolean = true;
  line:number = 0;
  column:number = 1;
  constructor(private router: Router,
    private createDecisionService: CreateDecisionService,
    private decisionService: DecisionService) { }

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

  ngOnInit() {
    this.destroy();
    
    if(localStorage.getItem("currentUser")!=null)
    {
      this.decisionService.getCriteriaArray().subscribe(data=>{
        this.array = data;
        this.arrays = new Array(this.array.length-1);
        this.pr=1;
        this.line = 0;
        this.column =1;
        while(this.pr<this.array.length)
        {
            this.arrays[this.pr-1] = this.array[this.pr];
            this.pr+=1;
        }
        this.initCriteriaNameArray();
        this.initCriteriaValueArray();
        this.initFirstVale();
        this.counter = this.doFact(this.shortComapreCritria.length-1);
      });
    }
    else{
      this.decision = this.createDecisionService.getDecision();
      this.decisionService.getCriteriaArrayWithoutAuth(this.decision).subscribe(data=>
      {
        this.array = data;
        this.arrays = new Array(this.array.length-1);
        this.pr=1;
        this.line = 0;
        this.column =1;
        while(this.pr<this.array.length)
        {
            this.arrays[this.pr-1] = this.array[this.pr];
            this.pr+=1;
        }
        this.initCriteriaNameArray();
        this.initCriteriaValueArray();
        this.initFirstVale();
        this.counter = this.doFact(this.shortComapreCritria.length-1);
      });
    }  
  }

  initFirstVale()
  {
    if(this.shortComapreCritria.length!=1)
    {
      this.firstCriteria = this.shortComapreCritria[0];
      this.secondCriteria = this.shortComapreCritria[1];
    }
    else{
      this.saveOnServer();
    }
  }

  initCriteriaNameArray()
  {
    let flag :boolean = true;
    for(let criteria of this.arrays)
    {
      flag = true;
     
        for(let part of this.shortComapreCritria)
        {
            if(criteria == part)
            {
              flag = false;
            }
        }
      
      if(flag!=false)
      {
        this.shortComapreCritria.push(criteria);
      }
    }
  }

  destroy()
  {
    this.array = [];
    this.arrays = [];
    this.shortComapreCritria = new Array();
    this.timeArray  = new Array();
    this.compareCriteria = [];
  }

  initCriteriaValueArray()
  {
    this.compareCriteria = new Array(this.arrays.length);
    for(var criteria = 0 ; criteria < this.arrays.length; criteria++)
    {
        this.compareCriteria[criteria] = new Array(this.arrays.length);
        this.compareCriteria[criteria][criteria] = 1;
    }
    for(var criteria = 0 ; criteria < this.arrays.length; criteria++)
    {
        for(var doublecriteria = 0 ; doublecriteria < this.arrays.length; doublecriteria++)
      {
        if(this.arrays[criteria] == this.arrays[doublecriteria])
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

  findIndex(criteriaName:string):number[]
  {
    let indexes : number[] = new Array();
    for(var index = 0 ; index < this.arrays.length; index++)
    {
      if(criteriaName == this.arrays[index])
      {
        indexes.push(index);
      }
    }
    return indexes;
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
      if(this.column == this.shortComapreCritria.length-1)
      {
        this.line +=1;
        this.column = this.line+1;
      }
      else{
        this.column +=1;
      }
      this.firstCriteria = this.shortComapreCritria[this.line];
      this.secondCriteria = this.shortComapreCritria[this.column];
      this.choose  = true;
    }
  }


  saveOnServer()
  {
    if(localStorage.getItem("currentUser")!=null)
    {
    this.decisionService.sendPairedCompareCriterias(this.compareCriteria).subscribe(data=>{
        
      if(data == true){
        this.router.navigate(['pairedComparisomComponent']);
      }
      else{
        this.ngOnInit();
      }
    });
  }
  else{
    this.decisionWithCompareArray = new DecisionWithCompareArray(this.decision,this.compareCriteria);
    this.decisionService.sendPairedCompareCriteriasWithoutAuth(this.decisionWithCompareArray).subscribe(data=>{
      console.log(data);
      this.createDecisionService.setDecision(data);
      this.decisionService.getAnswer(data).subscribe(data=>{
        if(data == true){
          this.router.navigate(['pairedComparisomComponent']);
        }
        else{
          this.ngOnInit();
        }
      });
    });
  }
  }

  saveCompare()
  {
    
      for(let line of this.findIndex(this.shortComapreCritria[this.line]))
      {
        for(let column of this.findIndex(this.shortComapreCritria[this.column]))
        {
          if(this.choose==true)
          {
            this.compareCriteria[line][column] = this.selectedValue;
            this.compareCriteria[column][line] = 1/this.selectedValue;
          }
          else
          {
            this.compareCriteria[line][column] = 1/this.selectedValue;
            this.compareCriteria[column][line] = this.selectedValue;
          }
        }
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

  goNext() {
    if(this.answer == true){
      this.router.navigate(['pairedComparisomComponent']);
    }
    else{
      this.router.navigate(['pairedComparisonCriteriaComponent']);
    }
  }

}
