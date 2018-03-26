import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './modules/app-routing.module';
import { MyMaterialModule } from './modules/my-material.module';
import { CreateDecisionModule } from './create-decision/create-decision.module';
import { ViewDecisionModule } from './view-decision/view-decision.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'app/shared/data.service';
import { DecisionService } from 'app/services/decision.service';
import {Http, RequestOptions} from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { UserService } from 'app/services/user-service';
import { AuthenticationService } from 'app/services/authentification-service';
import { HeaderComponent } from './header/header.component';
import { UserComponentModule } from 'app/user-component/user-component.module';
import { SignInComponent } from 'app/user-component/sign-in/sign-in.component';
import { SignUpComponent } from 'app/user-component/sign-up/sign-up.component';
import { ValidationData } from 'app/services/validationData';
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    UserComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    CreateDecisionModule,
    ViewDecisionModule,
    AppRoutingModule,
    MyMaterialModule
  ],
  providers: [DecisionService,
    { 
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    UserService,
    AuthenticationService,
    ValidationData
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
