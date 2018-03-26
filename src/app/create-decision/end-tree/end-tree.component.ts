import { Component, OnInit } from '@angular/core';
import { Decision, DecisionArray, CriteriaArray } from 'app/shared/decision';
import { Router } from '@angular/router';
import { DecisionService } from 'app/services/decision.service';

@Component({
  selector: 'app-end-tree',
  templateUrl: './end-tree.component.html',
  styleUrls: ['./end-tree.component.css']
})
export class EndTreeComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {};
    
  
}
