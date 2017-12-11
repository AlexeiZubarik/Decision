import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    CdkTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    CdkTableModule,
    MatSnackBarModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ]
})
export class MyMaterialModule {}
