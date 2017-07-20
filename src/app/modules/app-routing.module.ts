import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },  
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [ RouterModule.forRoot(
    appRoutes, { enableTracing: true }
  )],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }