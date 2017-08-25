import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { CreateDecisionService } from './shared/create-decision.service';

@Component({
  selector: 'app-create-decision',
  templateUrl: './create-decision.component.html',
  styleUrls: ['./create-decision.component.css']
})
export class CreateDecisionComponent implements OnInit {
  title = 'Create Decision';

  constructor(
    private router: Router,
    private location: Location,
    private createDecisionService: CreateDecisionService
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
    this.createDecisionService.titleDecision = null;
  }

  goNext() {
    this.router.navigate(['createalternative']);
  }
}
