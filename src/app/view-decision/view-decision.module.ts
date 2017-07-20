import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ViewDecisionComponent } from './view-decision.component';
import { DecisionsListComponent } from './decisions-list/decisions-list.component';
import { DecisionDetailComponent } from './decision-detail/decision-detail.component';

import { MyMaterialModule } from '../modules/my-material.module';
import { ViewDecisionRoutingModule } from './view-decision-routing/view-decision-routing.module';

import { DecisionService } from '../services/decision.service';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule,
    ViewDecisionRoutingModule
  ],
  declarations: [
    ViewDecisionComponent,
    DecisionsListComponent,
    DecisionDetailComponent
  ],
  providers: [DecisionService]
})
export class ViewDecisionModule { }
