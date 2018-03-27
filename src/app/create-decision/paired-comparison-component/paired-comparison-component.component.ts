import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DecisionService } from 'app/services/decision.service';

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
  choose:boolean = true;
  selectedValue: number;
  compareCriteria : number[][];
  timeArray : any[] = new Array();
  compareArray : number = 0;
  flag: boolean = true;
  line:number = 1;
  column:number = 0;
  constructor(private router: Router,
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
    this.decisionService.getCriteriaArray().subscribe(data=>{
      this.array = data;
      this.arrays = new Array(this.array.length-1);
      while(this.pr<this.array.length)
      {
          this.arrays[this.pr-1] = this.array[this.pr];
          this.pr+=1;
      }
      this.firstCriteria = this.arrays[0];
      this.secondCriteria = this.arrays[1];
      this.counter = this.doFact(this.arrays.length-1)-1;
      this.compareCriteria = new Array(this.arrays.length);
    });
    
  }

  private doFact(counter: number ): number {
    return counter <= 1 ? 1 : counter + this.doFact(counter - 1);
  }
  saveChoose(){
    if(this.line == 1 && this.column == 0)
    {
      for(var criteria = 0 ; criteria < this.arrays.length; criteria++)
      {
        this.compareCriteria[criteria] = new Array(this.arrays.length);
        this.compareCriteria[criteria][criteria] = 1;
      }
      this.saveCompare();
      this.changeCounter();
      if(this.arrays.length>2)
      {
        this.line = this.line + 1;
        this.secondCriteria = this.arrays[this.line];
      }
      else{
          this.column = this.column +1;
      }
    }
    else
    {
      if(this.column < (this.arrays.length-1))
      {
      if(this.line < this.arrays.length-1)
      {
        this.changeCounter();
        this.saveCompare(); 
        this.line = this.line +1;
        this.firstCriteria = this.arrays[this.column];
        this.secondCriteria = this.arrays[this.line];
      }
      else
      {
        if(this.column < (this.arrays.length-1))
        {
          this.saveCompare();
          this.changeCounter();
          this.column = this.column + 1;
          if(this.column < (this.arrays.length-1))
          {
            this.line = this.column + 1;
            this.firstCriteria = this.arrays[this.column];
            this.secondCriteria = this.arrays[this.line];
          }
        }
      }
    }
    else{
      this.decisionService.sendPairedCompareCriterias(this.compareCriteria).subscribe(data=>{
        
        if(data == true){
          this.router.navigate(['pairedComparisomComponent']);
        }
        else{
          location.reload();
        }
      });
      }
    }     
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

  goNext() {
    if(this.answer == true){
      this.router.navigate(['pairedComparisomComponent']);
    }
    else{
      this.router.navigate(['pairedComparisonCriteriaComponent']);
    }
  }

}
