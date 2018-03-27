import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyMaterialModule } from 'app/modules/my-material.module';
import { SignInComponent } from 'app/user-component/sign-in/sign-in.component';
import { SignUpComponent } from 'app/user-component/sign-up/sign-up.component';
import { UserComponentComponent } from 'app/user-component/user-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyMaterialModule,
  ],
  declarations: [
  ]
})
export class UserComponentModule { }
