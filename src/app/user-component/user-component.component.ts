import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SignInComponent } from 'app/user-component/sign-in/sign-in.component';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css'],
  providers: [SignInComponent]
})
export class UserComponentComponent{

  constructor(private signInComponent:SignInComponent){}
  activeLinkLogin: boolean = true;
  activeLinkRegister: boolean = false;

  changeActiveLogin(){
    this.activeLinkLogin = true;
    this.activeLinkRegister=false;
  }
  changeActiveRegister() {
    this.activeLinkRegister = true;
    this.activeLinkLogin = false;
  }
  close()
  {
    window.close();
  }
}