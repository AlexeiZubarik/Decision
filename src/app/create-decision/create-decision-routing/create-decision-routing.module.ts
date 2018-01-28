import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateDecisionComponent } from '../create-decision.component';
import { DecisionFormComponent } from '../decision-form/decision-form.component';
import { CreateCriterionComponent } from '../create-criterion/create-criterion.component';
import { CreateAlternativeComponent } from '../create-alternative/create-alternative.component';
import { AddValueCriterionComponent } from '../add-value-criterion/add-value-criterion.component';
import { InstructionComparisonValueComponent } from '../instruction-comparison-value/instruction-comparison-value.component'
import { PairedComparisomComponent } from 'app/create-decision/paired-comparisom/paired-comparisom.component';

const createDecisionRoutes: Routes = [
  { path: 'createdecision',
    component: CreateDecisionComponent,
    children: [
      {
        path: '',
        component: DecisionFormComponent
      },
    ]
  },
  { path: 'createalternative', component: CreateAlternativeComponent },
  { path: 'createcriterion', component: CreateCriterionComponent },
  { path: 'addvaluecriterion', component: AddValueCriterionComponent },
  { path: 'instructionComparisonValueComponent', component: InstructionComparisonValueComponent },
  { path: 'pairedComparisomComponent', component: PairedComparisomComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(createDecisionRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CreateDecisionRoutingModule { }
