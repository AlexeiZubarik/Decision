import { NgModule } from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatMenuModule, MatFormField } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
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
import { MatSnackBarModule, MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';

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
    MatExpansionModule,
    MatPaginatorModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule
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
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule
  ]
})
export class MyMaterialModule {}
