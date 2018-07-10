import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'app/shared/user';
import { AuthenticationService } from 'app/services/authentification-service';
import { UserService } from 'app/services/user-service';
import { $ } from 'protractor';
import { UserComponentComponent } from 'app/user-component/user-component.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent{
  error: string;
  
  protected change: boolean = false;
  public user: User = new User();
  constructor(private authenticationService: AuthenticationService,
              private userServise: UserService,
              private router: Router) {
                this.user._email="";
  }
  ngOnit()
  {
    this.user._email = "";
    this.user._password="";
  }
  checkLogin() {}
  checkPassword() {}
  loading = false;
  returnUrl: string;
  errorMessage: string;
  login(data: any) {
    this.loading = true;
    this.errorMessage = null;
    this.authenticationService.login(this.user._email, this.user._password)
      .flatMap(data => {
        return this.authenticationService.getMe();
      })
      .subscribe(
        data => {
          localStorage.setItem('currentUser', JSON.stringify(data));
          window.document.getElementById("closeButton").click();
          

        },
        error => {
          this.loading = false;
          console.log(this.errorMessage = error.json().message);
        }
      );
  }
  formReset(form: NgForm){
      form.reset();
  }
}
