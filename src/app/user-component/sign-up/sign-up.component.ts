import { Component, OnInit } from '@angular/core';
import { DecisionService } from 'app/services/decision.service';
import { User } from 'app/shared/user';
import { UserService } from 'app/services/user-service';
import { AuthenticationService } from 'app/services/authentification-service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ValidationData } from 'app/services/validationData';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {
  public user: User = new User();
  isPasswordConfirm = false;
  passwordConfirm: string;
  public errorMessage: string;
  form: FormGroup;
  formErrors = {
    passwordConfirm: ''
  };
  constructor(private userService: UserService,
              private validationService:ValidationData)
  {}

  ngOnit()
  {
    this.user._email = "";
    this.user._password="";
    this.user._firstName="";
    this.user._lastName="";
    this.user._userName="";
  }

  static setErrors(answer: string) {
    return answer === null;
  }
  controller() {}
  checkFirstName(){}
  checkLastName(){}
  checkEmail(){}
  checkNick(){}
  checkPasswordConfirm(){
    this.formErrors.passwordConfirm = this.validationService.confirmPassword(this.user._password, this.passwordConfirm);
    this.isPasswordConfirm = SignUpComponent.setErrors(this.formErrors.passwordConfirm);
  }
  register(data: any) {
    this.userService.register(this.user).subscribe(
      data =>{
        window.document.getElementById("closeButton").click();},
      error =>{
        console.log(this.errorMessage = error.json().message);
      })
  }
}
