import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateDecisionComponent } from 'app/create-decision/create-decision.component';
import { CreateCriterionComponent } from 'app/create-decision/create-criterion/create-criterion.component';
import { CreateAlternativeComponent } from 'app/create-decision/create-alternative/create-alternative.component';

const createDecisionRoutes: Routes = [
  { path: 'createdecision', component: CreateDecisionComponent },
  //{ path: 'decision/:id', component: CreateCriterionComponent }
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
