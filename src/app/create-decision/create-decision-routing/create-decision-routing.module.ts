import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateDecisionComponent } from '../create-decision.component';
import { DecisionFormComponent } from '../decision-form/decision-form.component';
import { CreateCriterionComponent } from '../create-criterion/create-criterion.component';
import { CreateAlternativeComponent } from '../create-alternative/create-alternative.component';
import { AddValueCriterionComponent } from '../add-value-criterion/add-value-criterion.component';

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
  { path: 'addvaluecriterion', component: AddValueCriterionComponent }
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
