import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { UserComponentComponent } from 'app/user-component/user-component.component';
import { UserComponentModule } from 'app/user-component/user-component.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'usercomponent', component: UserComponentComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(
    appRoutes, { enableTracing: true }
  )],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
