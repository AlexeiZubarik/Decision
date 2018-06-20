import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'app/services/authGuard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  title = 'Decision';
  
  constructor(
    public authGuard: AuthGuard,
    private router: Router) {}

  goHome() {
    this.router.navigate(['']);
  }

  goCreateDecision() {
    this.router.navigate(['createdecision']);
  }

  goViewDecision() {
    this.router.navigate(['viewdecision']);
  }
  goRegistration(){
    this.router.navigate(['usercomponent']);
  }
  ngOnInit() {    
  }  
}
