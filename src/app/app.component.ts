import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  title = 'Decision';
  
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['']);
  }

  goCreateDecision() {
    this.router.navigate(['createdecision']);
  }

  goViewDecision() {
    this.router.navigate(['viewdecision']);
  }

  ngOnInit() {    
  }  
}
