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
  constructor(
    private router: Router,) {
  }
  ngOnInit() {
  }
  
  goNext() {
    this.router.navigate(['addvaluecriterion']);
  }
}
