import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateDecisionComponent } from './create-decision.component';
import { DecisionFormComponent } from './decision-form/decision-form.component';
import { CreateCriterionComponent } from './create-criterion/create-criterion.component';
import { CreateAlternativeComponent } from './create-alternative/create-alternative.component';
import { AddValueCriterionComponent } from './add-value-criterion/add-value-criterion.component';

import { MyMaterialModule } from '../modules/my-material.module';
import { CreateDecisionRoutingModule } from './create-decision-routing/create-decision-routing.module';

import { DecisionService } from '../services/decision.service';
import { CreateDecisionService } from './shared/create-decision.service';

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
    CreateAlternativeComponent,
    AddValueCriterionComponent,
    DecisionFormComponent
  ],
  providers: [
    DecisionService,
    CreateDecisionService
  ]
})
export class CreateDecisionModule { }
