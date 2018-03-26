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
import { InstructionComparisonValueComponent } from './instruction-comparison-value/instruction-comparison-value.component';
import { PairedComparisomComponent } from './paired-comparisom/paired-comparisom.component';
import { EndTreeComponent } from './end-tree/end-tree.component';
import { PairedComparisonComponentComponent } from './paired-comparison-component/paired-comparison-component.component';
import { ViewTreeComponent } from './end-tree/view-tree/view-tree.component';
import { EditAlternativComponent } from './create-alternative/edit-alternativ/edit-alternativ.component';
import { EditCriteriaComponent } from './create-criterion/edit-criteria/edit-criteria.component';

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
    DecisionFormComponent,
    InstructionComparisonValueComponent,
    PairedComparisomComponent,
    EndTreeComponent,
    PairedComparisonComponentComponent,
    ViewTreeComponent,
    EditAlternativComponent,
    EditCriteriaComponent
  ],
  providers: [
    DecisionService,
    CreateDecisionService
  ]
})
export class CreateDecisionModule { }
