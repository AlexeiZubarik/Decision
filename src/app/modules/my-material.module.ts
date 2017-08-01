import { NgModule } from '@angular/core';

import { MdMenuModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MdMenuModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule,
    MdButtonModule,
    MdInputModule,
    MdGridListModule,
    MdTableModule,
    BrowserAnimationsModule
  ],
  exports: [
    MdMenuModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule,
    MdButtonModule,
    MdInputModule,
    MdGridListModule,
    MdTableModule,
    BrowserAnimationsModule
  ]
})
export class MyMaterialModule {}
