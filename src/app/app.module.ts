import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CreateDecisionModule,
    ViewDecisionModule,
    AppRoutingModule,
    MyMaterialModule,    
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [DecisionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
