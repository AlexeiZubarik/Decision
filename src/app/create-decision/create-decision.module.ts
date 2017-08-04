import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateDecisionComponent } from './create-decision.component';
import { CreateCriterionComponent } from './create-criterion/create-criterion.component';
import { CreateAlternativeComponent } from './create-alternative/create-alternative.component';

import { MyMaterialModule } from '../modules/my-material.module';

import { DecisionService } from '../services/decision.service';
import { CreateDecisionService } from './shared/create-decision.service';

import { CreateDecisionRoutingModule } from './create-decision-routing/create-decision-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyMaterialModule,
    CreateDecisionRoutingModule
  ],
  declarations: [
    CreateDecisionComponent,
    CreateCriterionComponent,
    CreateAlternativeComponent
  ],
  providers: [
    DecisionService,
    CreateDecisionService
  ]
})
export class CreateDecisionModule { }
