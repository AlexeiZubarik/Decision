import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateDecisionComponent } from '../create-decision.component';
import { DecisionFormComponent } from '../decision-form/decision-form.component';
import { CreateCriterionComponent } from '../create-criterion/create-criterion.component';
import { CreateAlternativeComponent } from '../create-alternative/create-alternative.component';
import { AddValueCriterionComponent } from '../add-value-criterion/add-value-criterion.component';
import { InstructionComparisonValueComponent } from '../instruction-comparison-value/instruction-comparison-value.component'
import { PairedComparisomComponent } from 'app/create-decision/paired-comparisom/paired-comparisom.component';
import { EndTreeComponent } from 'app/create-decision/end-tree/end-tree.component';
import { PairedComparisonComponentComponent } from 'app/create-decision/paired-comparison-component/paired-comparison-component.component';
import { EditAlternativComponent } from 'app/create-decision/create-alternative/edit-alternativ/edit-alternativ.component';
import { EditCriteriaComponent } from 'app/create-decision/create-criterion/edit-criteria/edit-criteria.component';
import { ParsingCriteriaComponent } from 'app/create-decision/parsing-criteria/parsing-criteria.component';
import { DeleteAlternativeComponent } from 'app/create-decision/create-alternative/delete-alternative/delete-alternative.component';

const createDecisionRoutes: Routes = [
  { path: 'createdecision',
    component: CreateDecisionComponent,
    children: [
      {
        path: ':flag',
        component: DecisionFormComponent
      },
    ]
  },
  { path: 'createalternative', component: CreateAlternativeComponent ,
  children: [
    {
      path: ':flag',
      component: CreateAlternativeComponent
    },
  ]
  },
  { path: 'createcriterion',component: CreateCriterionComponent,
  children: [
    {
      path: ':flag',
      component: CreateCriterionComponent
    },
  ]
  },
  { path: 'instructionComparisonValueComponent', component: InstructionComparisonValueComponent ,
    children: [
      {
        path: ':flag',
        component: InstructionComparisonValueComponent
      },
  ]
  },
  { path: 'addvaluecriterion', component: AddValueCriterionComponent},
  { path: 'pairedComparisomComponent', component: PairedComparisomComponent },
  { path: 'endTree', component: EndTreeComponent},
  { path: 'parsingcriteria', component: ParsingCriteriaComponent},
  { path: 'pairedComparisonCriteriaComponent', component: PairedComparisonComponentComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(createDecisionRoutes)
  ],
  exports: [
    RouterModule
  ],
  entryComponents: [CreateAlternativeComponent,DeleteAlternativeComponent,EditAlternativComponent,CreateCriterionComponent,EditCriteriaComponent],
})
export class CreateDecisionRoutingModule { }
