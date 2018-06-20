import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { UserComponentComponent } from 'app/user-component/user-component.component';
import { UserComponentModule } from 'app/user-component/user-component.module';
import { logoutComponent } from 'app/logout/logout.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'usercomponent', component: UserComponentComponent },
  { path: 'logout', component: logoutComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(
    appRoutes, { enableTracing: true }
  )],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
