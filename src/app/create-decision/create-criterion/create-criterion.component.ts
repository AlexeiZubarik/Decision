import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-criterion',
  templateUrl: './create-criterion.component.html',
  styleUrls: ['./create-criterion.component.css']
})
export class CreateCriterionComponent implements OnInit {
  title = 'Create Criterion';

  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  goNext() {
    this.router.navigate(['']);
  }

}
