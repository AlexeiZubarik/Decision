import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DecisionService } from 'app/services/decision.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Decision App';
  constructor(private router: Router,
    private decisionService: DecisionService,) { }

  goCreateDesicion() {
    this.router.navigate(['createdecision']);
  }

  viewDecisionList() {
    this.router.navigate(['viewdecision']);
  }

  ngOnInit() {
  }

}
