import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-alternative',
  templateUrl: './delete-alternative.component.html',
  styleUrls: ['./delete-alternative.component.css']
})
export class DeleteAlternativeComponent {
  name = "";
  constructor(
    public dialogRef: MatDialogRef<DeleteAlternativeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
